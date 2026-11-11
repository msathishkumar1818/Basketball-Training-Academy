const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

console.log('--- RESPONSIVE LINES 280-330 ---');
for (let i = 279; i < 330; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('--- RESPONSIVE LINES 500-530 ---');
for (let i = 499; i < 530; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

