const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

for (let i = 4570; i < Math.min(4630, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

