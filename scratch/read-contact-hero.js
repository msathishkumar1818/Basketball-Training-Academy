const fs = require('fs');
const html = fs.readFileSync('contact.html', 'utf8');
const lines = html.split('\n');

for (let i = 230; i < 280; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

