const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

const targetSnippet = `.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}`;

const replacementSnippet = `.footer-brand-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.site-footer .brand-title {
  color: #FFFFFF !important;
}

.site-footer .brand-title span {
  color: var(--color-primary) !important;
}

.site-footer .brand-tagline {
  color: #CBD5E1 !important;
}`;

if (css.includes(targetSnippet)) {
  css = css.replace(targetSnippet, replacementSnippet);
  fs.writeFileSync('assets/css/style.css', css, 'utf8');
  console.log('Footer brand visibility rules added successfully.');
} else {
  console.error('ERROR: targetSnippet not found in style.css');
}

