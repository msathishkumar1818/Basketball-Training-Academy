const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const lines = css.split('\n');
lines.forEach((l, i) => {
  if (l.includes('-overlay') || l.includes('hero-overlay') || l.includes('hero-bg') || l.includes('inner-page-hero')) {
    console.log(i + 1, l.trim());
  }
});

