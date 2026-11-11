const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

console.log('--- LINES 235 to 245 ---');
for (let i = 234; i < 245; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('--- LINES 590 to 600 ---');
for (let i = 589; i < 600; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

