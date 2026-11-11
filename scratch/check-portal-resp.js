const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// Check portal-app-main in responsive.css
console.log('--- Checking portal-app-main in responsive.css ---');
const rLines = resp.split('\n');
rLines.forEach((l, i) => {
  if (l.includes('.portal-app-main')) {
    console.log(i + 1, l);
    for (let j = i; j < i + 10; j++) {
      console.log('  ', rLines[j]);
    }
  }
});

