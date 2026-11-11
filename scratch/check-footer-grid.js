const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const search = (str, label) => {
  const lines = str.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('footer-grid') || l.includes('footer-heading') || l.includes('site-footer')) {
      console.log(label, i + 1, l.trim());
    }
  });
};

search(css, 'style.css:');
search(resp, 'responsive.css:');

