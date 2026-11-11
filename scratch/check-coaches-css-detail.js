const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

for (let i = 4528; i < 4640; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

