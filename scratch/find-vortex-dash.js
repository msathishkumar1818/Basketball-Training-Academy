const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');
const lines = dash.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('vortex')) {
    console.log(i + 1, l.trim());
  }
});

