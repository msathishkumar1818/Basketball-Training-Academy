const fs = require('fs');
const html = fs.readFileSync('home-2.html', 'utf8');
const lines = html.split('\n');

for (let i = 490; i < Math.min(560, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

