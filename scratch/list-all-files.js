const fs = require('fs');
const path = require('path');

function getAll(dir) {
  let res = [];
  if (!fs.existsSync(dir)) return res;
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f).replace(/\\/g, '/');
    if (fs.statSync(full).isDirectory()) res = res.concat(getAll(full));
    else res.push(full);
  });
  return res;
}

const all = getAll('assets/images');
console.log('All files in assets/images:');
console.log(all);

