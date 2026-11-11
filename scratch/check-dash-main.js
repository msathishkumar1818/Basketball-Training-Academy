const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');
const lines = dash.split('\n');
for (let i = 75; i < 150; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

