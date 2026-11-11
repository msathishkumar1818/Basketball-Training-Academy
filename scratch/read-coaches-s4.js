const fs = require('fs');
const html = fs.readFileSync('coaches.html', 'utf8');
const lines = html.split('\n');

for (let i = 410; i < Math.min(520, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

