const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const allImages = walk('assets/images').filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

const htmlFiles = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html', 'login.html'];
const used = new Set();
htmlFiles.forEach(hf => {
  const c = fs.readFileSync(hf, 'utf8');
  allImages.forEach(img => {
    const norm = img.replace(/\\/g, '/');
    if (c.includes(norm)) {
      used.add(norm);
    }
  });
});

console.log('--- UNUSED IMAGES ON DISK ---');
allImages.forEach(img => {
  const norm = img.replace(/\\/g, '/');
  if (!used.has(norm)) {
    console.log(norm, fs.statSync(img).size);
  }
});

