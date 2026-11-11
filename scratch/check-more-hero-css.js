const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const list = [
  'hero-home2-content',
  'hero-badge-pill',
  'cta-inner-box',
  'section-contact-cta'
];

list.forEach(sel => {
  const regex = new RegExp('\\.' + sel + '[^{]*\\{[^}]*\\}', 'g');
  const matches = css.match(regex);
  console.log(`=== ${sel} ===`, matches ? matches.map(m => m.replace(/\s+/g, ' ')) : 'NONE');
});

