const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const responsive = fs.readFileSync('assets/css/responsive.css', 'utf8');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

console.log('=== PHASE 03 — HOME 1 QA AUDIT ===');

// 1. Check exactly 6 main content sections in <main>
const mainMatch = html.match(/<main id="main-content">([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error('FAIL: <main id="main-content"> not found');
} else {
  const sections = mainMatch[1].match(/<section[\s\S]*?<\/section>/g) || [];
  console.log('Main Content Section Count:', sections.length, '(Must be exactly 6)');
}

// 2. Check hero viewport height
console.log('Hero min-height calc(100vh - var(--header-height)) configured:', css.includes('min-height: calc(100vh - var(--header-height))'));

// 3. Check last section is CTA
const lastSectionIsCTA = /<section class="section-court-cta"[\s\S]*?<\/section>\s*<\/main>/.test(html);
console.log('Last section is CTA Section:', lastSectionIsCTA);

// 4. Check local image paths exist on disk
const imgSrcs = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('Total image sources found in HTML:', imgSrcs.length);
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

// 5. Check remote image URLs in HTML
const remoteImages = imgSrcs.filter(src => src.startsWith('http://') || src.startsWith('https://'));
console.log('Zero remote image URLs in HTML:', remoteImages.length === 0);

// 6. Check Zero Inline CSS and Inline JS
console.log('Zero inline style= attributes:', !html.includes('style='));
console.log('Zero inline <style> tags:', !html.includes('<style'));
console.log('Zero inline <script> tags:', (html.match(/<script/g) || []).length === 1 && html.includes('<script src="assets/js/main.js"></script>'));

// 7. Check Zero emojis
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
console.log('Zero emojis in HTML:', !emojiRegex.test(html));
console.log('Zero emojis in CSS:', !emojiRegex.test(css));
console.log('Zero emojis in JS:', !emojiRegex.test(js));

// 8. Check Dark Mode #000000
console.log('Pure Black Dark Mode #000000 verified:', css.includes('--bg-body: #000000;'));

// 9. Check spotlight card equal height rules
console.log('Equal card height rule (height: 100%):', css.includes('.spotlight-card') && css.includes('height: 100%;'));

// 10. Check responsive breakpoints coverage
const breakpoints = ['1441px', '1280px', '1032px', '1024px', '960px', '768px', '440px', '360px'];
const missingBp = breakpoints.filter(bp => !responsive.includes(bp));
console.log('Responsive Breakpoints checked:', missingBp.length === 0 ? 'ALL PRESENT' : 'MISSING: ' + missingBp.join(', '));

