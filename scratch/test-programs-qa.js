const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('programs.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const responsive = fs.readFileSync('assets/css/responsive.css', 'utf8');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

console.log('=== PHASE 05 — PROGRAMS QA AUDIT ===');

// 1. Check exactly 5 main content sections in <main>
const mainMatch = html.match(/<main id="main-content">([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error('FAIL: <main id="main-content"> not found in programs.html');
} else {
  const sections = mainMatch[1].match(/<section[\s\S]*?<\/section>/g) || [];
  console.log('Programs Page Section Count:', sections.length, '(Must be exactly 5)');
}

// 2. Check inner hero height standardized
console.log('Inner Hero min-height 420px configured:', css.includes('.inner-page-hero') && css.includes('min-height: 420px;'));

// 3. Check last section is CTA
const lastSectionIsCTA = /<section class="section-programs-cta"[\s\S]*?<\/section>\s*<\/main>/.test(html);
console.log('Last section is Programs CTA Section:', lastSectionIsCTA);

// 4. Check local images on disk
const imgSrcs = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('Total image sources found in programs.html:', imgSrcs.length);
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

// 5. Check image uniqueness across all 3 pages
const h1Images = [...fs.readFileSync('index.html', 'utf8').matchAll(/assets\/images\/(hero|sections|services|testimonials|backgrounds)\/[^"]+/g)].map(m => m[0]);
const h2Images = [...fs.readFileSync('home-2.html', 'utf8').matchAll(/assets\/images\/(hero|sections|services|testimonials|backgrounds)\/[^"]+/g)].map(m => m[0]);
const progImages = [...html.matchAll(/assets\/images\/(hero|sections|services|testimonials|backgrounds)\/[^"]+/g)].map(m => m[0]);

const allContentImages = [...h1Images, ...h2Images, ...progImages];
const uniqueImages = new Set(allContentImages);
console.log('Total content images used across 3 pages:', allContentImages.length);
console.log('Unique images count:', uniqueImages.size);
console.log('Duplicate check across all pages:', allContentImages.length === uniqueImages.size ? 'ZERO DUPLICATES' : 'FOUND DUPLICATES');

// 6. Check Zero Inline CSS and Inline JS
console.log('Zero inline style= attributes:', !html.includes('style='));
console.log('Zero inline <style> tags:', !html.includes('<style'));
console.log('Zero inline <script> tags:', (html.match(/<script/g) || []).length === 1 && html.includes('<script src="assets/js/main.js"></script>'));

// 7. Check Zero emojis
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
console.log('Zero emojis in programs.html:', !emojiRegex.test(html));

// 8. Check tier card equal heights
console.log('Equal card height rule on tier-card:', css.includes('.tier-card') && css.includes('height: 100%;'));

// 9. Check exactly 6 nav items with Programs active
const navMatch = html.match(/<nav class="desktop-nav"[\s\S]*?<\/nav>/);
if (navMatch) {
  const directNavRegex = /<!-- \d+\.\s+([^>]+) -->/g;
  let match;
  const foundItems = [];
  while ((match = directNavRegex.exec(navMatch[0])) !== null) {
    foundItems.push(match[1].trim());
  }
  console.log('Desktop Nav item count in programs.html:', foundItems.length, '(Must be exactly 6)');
  console.log('Programs link has active class:', html.includes('<a href="programs.html" class="nav-link active">Programs</a>'));
}

