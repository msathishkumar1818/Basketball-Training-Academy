const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

for (let i = 4640; i < Math.min(4725, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

