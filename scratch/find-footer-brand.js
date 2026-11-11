const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('footer') && (l.includes('brand') || l.includes('logo') || l.includes('title'))) {
    console.log(i + 1, l.trim());
  }
});

// Also search for footer styles
lines.forEach((l, i) => {
  if (l.includes('.site-footer') || l.includes('.footer-')) {
    console.log('FOOTER:', i + 1, l.trim());
  }
});

