const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const list = [
  'cta-main-title',
  'cta-subtext',
  'cta-box-inner',
  'cta-description',
  'section-contact-cta',
  'inner-hero-title',
  'inner-hero-overlay',
  'inner-hero-content'
];

list.forEach(sel => {
  const regex = new RegExp('\\.' + sel + '[^{]*\\{[^}]*\\}', 'g');
  const matches = css.match(regex);
  console.log(`=== ${sel} ===`);
  if (matches) {
    matches.forEach(m => console.log(m.replace(/\s+/g, ' ')));
  } else {
    console.log('None');
  }
});

