const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

for (let i = 2540; i < 2590; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

