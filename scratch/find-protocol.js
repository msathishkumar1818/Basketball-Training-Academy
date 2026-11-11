const fs = require('fs');
const html = fs.readFileSync('home-2.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, idx) => {
  if (l.toLowerCase().includes('biometric') || l.toLowerCase().includes('reaction force')) {
    console.log(idx + 1, l);
  }
});

