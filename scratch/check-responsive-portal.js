const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('portal-app-sidebar') || l.includes('portal-app-main') || l.includes('portal-app-grid')) {
    console.log(`Line ${idx+1}: ${l}`);
  }
});

