const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const matches = css.match(/\.site-header[^{]*\{[^}]*\}/g);
console.log('--- .site-header rules ---');
if (matches) {
  matches.forEach(m => console.log(m));
} else {
  console.log('None found');
}

