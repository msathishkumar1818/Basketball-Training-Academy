const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const regex = /rgba\(0,\s*0,\s*0,\s*0\.(?:8\d|9\d)\)/g;
let match;
const matches = [];
while ((match = regex.exec(css)) !== null) {
  const lineNo = css.substring(0, match.index).split('\n').length;
  matches.push({ lineNo, matched: match[0] });
}

console.log('Heavy black overlays (>= 0.80):', matches.length);
matches.forEach(m => console.log(`Line ${m.lineNo}: ${m.matched}`));

