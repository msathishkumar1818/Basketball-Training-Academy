const fs = require('fs');

function inspectImageStrings(filePath) {
  const buf = fs.readFileSync(filePath);
  // Look for text strings in JPEG header / EXIF / comments
  const str = buf.toString('latin1', 0, Math.min(buf.length, 2048));
  const matches = str.match(/[\w\s-]{4,}/g) || [];
  return matches.slice(0, 10).join(', ');
}

const files = [
  'assets/images/hero/hero-home1.jpg',
  'assets/images/hero/hero-home2.jpg',
  'assets/images/backgrounds/cta-combine-dark.jpg',
  'assets/images/sections/court-facility.jpg',
  'assets/images/sections/shooting-protocol.jpg',
  'assets/images/sections/biomechanics-drill.jpg',
  'assets/images/sections/dashboard-hero.jpg',
  'assets/images/about/about-hero.jpg'
];

files.forEach(f => {
  console.log(f, ':', inspectImageStrings(f));
});

