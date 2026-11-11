const fs = require('fs');
const html = fs.readFileSync('home-2.html', 'utf8');
const lines = html.split('\n');
for (let i = 295; i < 395; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

