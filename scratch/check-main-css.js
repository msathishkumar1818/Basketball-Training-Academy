const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const mainMatch = css.match(/^main\s*\{[^}]*\}/m);
console.log('main selector:', mainMatch ? mainMatch[0] : 'None');

