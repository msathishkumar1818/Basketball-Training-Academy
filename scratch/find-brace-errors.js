const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const lines = css.split('\n');
let depth = 0;
lines.forEach((line, idx) => {
  const opens = (line.match(/\{/g) || []).length;
  const closes = (line.match(/\}/g) || []).length;
  
  if (depth + opens - closes < 0) {
    console.log(`Extra closing brace around line ${idx + 1}: ${line}`);
  }
  depth += opens - closes;
  if (depth < 0) depth = 0; // reset
});
console.log('Final depth:', depth);

