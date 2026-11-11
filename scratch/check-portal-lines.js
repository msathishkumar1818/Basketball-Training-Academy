const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('.portal-app-sidebar') || l.includes('.portal-app-main') || l.includes('.portal-app-grid')) {
    console.log(`Line ${idx+1}: ${l}`);
  }
});

