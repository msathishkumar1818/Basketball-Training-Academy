const fs = require('fs');
const html = fs.readFileSync('coaches.html', 'utf8');
const lines = html.split('\n');

for (let i = 405; i < Math.min(480, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

