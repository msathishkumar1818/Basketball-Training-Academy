const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const list = [
  'inner-hero-subtext',
  'inner-hero-meta-bar',
  'meta-item',
  'meta-label',
  'meta-value',
  'meta-divider'
];

list.forEach(sel => {
  const regex = new RegExp('\\.' + sel + '[^{]*\\{[^}]*\\}', 'g');
  const matches = css.match(regex);
  console.log(`=== ${sel} ===`, matches ? matches.map(m => m.replace(/\s+/g, ' ')) : 'NONE');
});

