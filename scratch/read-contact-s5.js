const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const lines = html.split('\n');

for (let i = 545; i < Math.min(600, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

