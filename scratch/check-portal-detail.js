const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

console.log('--- LINES 2545 - 2585 ---');
for (let i = 2544; i < 2585; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

console.log('--- LINES 2710 - 2735 ---');
for (let i = 2709; i < 2735; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

