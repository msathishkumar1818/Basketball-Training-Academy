const fs = require('fs');
const home2 = fs.readFileSync('home-2.html', 'utf8');
const lines = home2.split('\n');
for (let i = 110; i < 180; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

