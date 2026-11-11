const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('matrix')) {
    console.log(`${idx+1}: ${l}`);
  }
});

