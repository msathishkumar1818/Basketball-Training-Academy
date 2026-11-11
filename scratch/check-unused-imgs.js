const fs = require('fs');
const path = require('path');

function getAllFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getAllFiles(name, allFiles);
    } else {
      allFiles.push(name.replace(/\\/g, '/'));
    }
  }
  return allFiles;
}

const allImgs = getAllFiles('assets/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const pages = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
const usedImgs = new Set();
pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const m = c.match(/assets\/images\/[^\s"'\)]+/g) || [];
  m.forEach(i => usedImgs.add(i));
});

console.log('Total jpg/png in assets/images:', allImgs.length);
console.log('Currently used:', usedImgs.size);

const unused = allImgs.filter(img => !usedImgs.has(img));
console.log('Unused images:');
console.log(unused);

