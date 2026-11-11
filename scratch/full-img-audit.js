const fs = require('fs');
const path = require('path');

function getAll(dir) {
  let res = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f).replace(/\\/g, '/');
    if (fs.statSync(full).isDirectory()) res = res.concat(getAll(full));
    else if (full.endsWith('.jpg') || full.endsWith('.png')) res.push(full);
  });
  return res;
}

const all = getAll('assets/images');
const pages = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
const usage = {};
all.forEach(img => { usage[img] = []; });

pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  all.forEach(img => {
    if (c.includes(img)) usage[img].push(p);
  });
});

console.log('--- IMAGE USAGE BREAKDOWN ---');
for (const [img, pList] of Object.entries(usage)) {
  console.log(`${img}: used in [${pList.join(', ')}]`);
}

