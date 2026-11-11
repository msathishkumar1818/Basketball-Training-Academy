const fs = require('fs');
const js = fs.readFileSync('assets/js/main.js', 'utf8');
const lines = js.split('\n');
for (let i = 45; i < 120; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

