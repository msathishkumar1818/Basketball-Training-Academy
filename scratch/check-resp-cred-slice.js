const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

console.log('--- LINES 235 to 255 ---');
for (let i = 234; i < 255; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('--- LINES 600 to 615 ---');
for (let i = 599; i < Math.min(615, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

