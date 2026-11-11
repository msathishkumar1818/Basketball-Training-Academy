const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('section-shooting-matrix') || l.includes('matrix-grid-wrap') || l.includes('matrix-table') || l.includes('matrix-row')) {
    console.log(`${idx+1}: ${l}`);
  }
});

