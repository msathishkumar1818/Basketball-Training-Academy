const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const search = (file, name) => {
  const lines = file.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('.portal-app-main') || l.includes('.portal-app-grid') || l.includes('.portal-app-layout')) {
      console.log(name, i + 1, l.trim());
    }
  });
};

search(css, 'style.css:');
search(resp, 'responsive.css:');

