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

const images = walk('assets/images');
console.log('Images in assets/images:');
images.forEach(img => {
  const stat = fs.statSync(img);
  console.log(img, `${(stat.size / 1024).toFixed(1)} KB`);
});

