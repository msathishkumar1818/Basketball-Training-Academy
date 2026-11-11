const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('portal-app-sidebar') || l.includes('portal-grid-layout') || l.includes('portal-page-wrap') || l.includes('portal-main-area')) {
    console.log(i + 1, l);
  }
});

