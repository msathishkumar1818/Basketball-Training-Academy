const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

for (let i = 278; i < 330; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

