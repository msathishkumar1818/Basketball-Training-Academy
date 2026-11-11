const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const search = (str, file) => {
  const lines = str.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('schedule-grid-table') || l.includes('schedule-table-wrap')) {
      console.log(file, i + 1, l.trim());
    }
  });
};

search(css, 'style.css:');
search(resp, 'responsive.css:');

