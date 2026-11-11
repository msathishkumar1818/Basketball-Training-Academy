const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

console.log('--- LINES 174 to 185 ---');
for (let i = 173; i < 185; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('--- LINES 820 to 835 ---');
for (let i = 819; i < Math.min(835, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

