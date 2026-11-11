const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const list = [
  'section-contact-cta',
  'cta-heading-white',
  'cta-trust-strip',
  'cta-inner-box',
  'inner-page-hero',
  'contact-hero-bg',
  'inner-hero-desc',
  'combine-telemetry-strip',
  'telemetry-cell',
  'telemetry-lbl',
  'telemetry-val'
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

