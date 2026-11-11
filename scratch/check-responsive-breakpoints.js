const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const lines = resp.split('\n');
lines.forEach((l, i) => {
  if (l.includes('@media') || l.includes('portal-app-main') || l.includes('portal-app-sidebar')) {
    console.log(i + 1, l.trim());
  }
});

