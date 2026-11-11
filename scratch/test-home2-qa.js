const fs = require('fs');
const path = require('path');

const html1 = fs.readFileSync('index.html', 'utf8');
const html2 = fs.readFileSync('home-2.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const responsive = fs.readFileSync('assets/css/responsive.css', 'utf8');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

console.log('=== PHASE 04 — HOME 2 QA AUDIT ===');

// 1. Check exactly 6 main content sections in <main>
const mainMatch = html2.match(/<main id="main-content">([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error('FAIL: <main id="main-content"> not found in home-2.html');
} else {
  const sections = mainMatch[1].match(/<section[\s\S]*?<\/section>/g) || [];
  console.log('Home 2 Section Count:', sections.length, '(Must be exactly 6)');
}

// 2. Check hero viewport height
console.log('Hero 2 min-height calc(100vh - var(--header-height)):', css.includes('.hero-home2-section') && css.includes('min-height: calc(100vh - var(--header-height))'));

// 3. Check last section is CTA
const lastSectionIsCTA = /<section class="section-combine-cta"[\s\S]*?<\/section>\s*<\/main>/.test(html2);
console.log('Last section is Combine CTA Section:', lastSectionIsCTA);

// 4. Check local images on disk
const imgSrcs = [...html2.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('Total image sources found in home-2.html:', imgSrcs.length);
let missingImages = 0;
imgSrcs.forEach(src => {
  const fullPath = path.resolve(src);
  if (!fs.existsSync(fullPath)) {
    console.error('MISSING IMAGE:', src);
    missingImages++;
  } else {
    const size = fs.statSync(fullPath).size;
    if (size === 0) {
      console.error('EMPTY IMAGE FILE:', src);
      missingImages++;
    }
  }
});
console.log('Image validation:', missingImages === 0 ? 'ALL IMAGES EXIST & NON-EMPTY' : 'FAIL');

// 5. Check image uniqueness (0 duplicates between Home 1 and Home 2 major content images)
const h1Images = [...html1.matchAll(/assets\/images\/(hero|sections|testimonials|backgrounds)\/[^"]+/g)].map(m => m[0]);
const h2Images = [...html2.matchAll(/assets\/images\/(hero|sections|testimonials|backgrounds)\/[^"]+/g)].map(m => m[0]);
const duplicates = h2Images.filter(img => h1Images.includes(img));
console.log('Duplicate major images between Home 1 and Home 2:', duplicates.length, duplicates);

// 6. Check Zero Inline CSS and Inline JS
console.log('Zero inline style= attributes:', !html2.includes('style='));
console.log('Zero inline <style> tags:', !html2.includes('<style'));
console.log('Zero inline <script> tags:', (html2.match(/<script/g) || []).length === 1 && html2.includes('<script src="assets/js/main.js"></script>'));

// 7. Check Zero emojis
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
console.log('Zero emojis in home-2.html:', !emojiRegex.test(html2));

// 8. Check even position cards
console.log('Equal card height rule on position-card:', css.includes('.position-card') && css.includes('height: 100%;'));

// 9. Check exactly 6 nav items
const navMatch = html2.match(/<nav class="desktop-nav"[\s\S]*?<\/nav>/);
if (navMatch) {
  const items = (navMatch[0].match(/class="nav-link|class="nav-dropdown-item/g) || []);
  const directNavRegex = /<!-- \d+\.\s+([^>]+) -->/g;
  let match;
  const foundItems = [];
  while ((match = directNavRegex.exec(navMatch[0])) !== null) {
    foundItems.push(match[1].trim());
  }
  console.log('Desktop Nav item count in home-2.html:', foundItems.length, '(Must be exactly 6)');
}

