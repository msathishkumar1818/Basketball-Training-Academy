const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const fIdx = html.indexOf('<footer');
const fEnd = html.indexOf('</footer>');
console.log(html.substring(fIdx, fIdx + 1200));

