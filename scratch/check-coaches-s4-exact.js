const fs = require('fs');
const html = fs.readFileSync('coaches.html', 'utf8');
const lines = html.split('\n');

for (let i = 408; i < 464; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

