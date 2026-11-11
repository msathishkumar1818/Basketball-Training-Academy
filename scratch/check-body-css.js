const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');
for (let i = 85; i < 110; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

