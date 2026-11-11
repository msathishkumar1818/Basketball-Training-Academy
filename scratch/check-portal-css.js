const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');

// Find the section for portal layout
const startIdx = css.indexOf('/* Full Portal Application Two-Column Layout */');
const endIdx = css.indexOf('.portal-tab-content {');

console.log('--- Current portal layout CSS ---');
console.log(css.substring(startIdx, endIdx));

