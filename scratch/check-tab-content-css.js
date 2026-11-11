const fs = require('fs');

function checkFile(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('portal-tab-content')) {
      console.log(`${file} line ${idx+1}: ${l}`);
    }
  });
}

checkFile('assets/css/style.css');
checkFile('assets/css/responsive.css');

