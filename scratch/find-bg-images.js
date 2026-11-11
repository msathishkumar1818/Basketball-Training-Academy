const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const lines = css.split('\n');
const results = [];

lines.forEach((line, idx) => {
  if (line.includes('background-image:') || line.includes('background:') && line.includes('url(')) {
    // print context
    const snippet = lines.slice(Math.max(0, idx - 4), Math.min(lines.length, idx + 6)).join('\n');
    results.push({ lineNum: idx + 1, snippet });
  }
});

console.log(`Found ${results.length} background-image rules:`);
results.forEach(r => {
  console.log(`\n--- Line ${r.lineNum} ---`);
  console.log(r.snippet);
});

