const fs = require('fs');
const files = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
const imgUsage = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/assets\/images\/[^\s"'\)]+/g) || [];
  matches.forEach(img => {
    if (img.includes('logo.svg') || img.includes('favicon.svg')) return;
    imgUsage[img] = imgUsage[img] || [];
    imgUsage[img].push(f);
  });
});

console.log('Total unique images referenced in HTML:', Object.keys(imgUsage).length);
let dupes = 0;
for (const [img, pageList] of Object.entries(imgUsage)) {
  if (pageList.length > 1) {
    console.error('DUPLICATE:', img, 'in', pageList);
    dupes++;
  }
}
console.log('Duplicate images found across all pages:', dupes);
if (dupes > 0) process.exit(1);
console.log('PASS: 100% unique image usage across all pages!');

