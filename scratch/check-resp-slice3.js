const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const lines = resp.split('\n');

for (let i = 500; i < 540; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

