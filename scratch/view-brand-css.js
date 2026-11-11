const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('brand-text-group') || l.includes('brand-title') || l.includes('brand-tagline') || l.includes('portal-brand')) {
    console.log(i + 1, l);
  }
});

