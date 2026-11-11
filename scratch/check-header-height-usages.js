const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('--header-height')) {
    console.log(`Line ${idx+1}: ${l}`);
  }
});

