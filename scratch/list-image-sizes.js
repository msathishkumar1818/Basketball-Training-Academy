const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let subdirs = fs.readdirSync(dir);
  let files = [];
  subdirs.forEach(sub => {
    let res = path.resolve(dir, sub);
    if (fs.statSync(res).isDirectory()) {
      files = files.concat(getFiles(res));
    } else if (res.endsWith('.jpg') || res.endsWith('.png')) {
      files.push({
        rel: path.relative(process.cwd(), res),
        size: fs.statSync(res).size
      });
    }
  });
  return files;
}

const list = getFiles('assets/images');
list.forEach(f => console.log(f.rel, f.size));

