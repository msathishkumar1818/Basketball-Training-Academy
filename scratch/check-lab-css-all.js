const fs = require('fs');

function findRules(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('combine-lab') || l.includes('lab-phase') || l.includes('lab-metric') || l.includes('lab-stat')) {
      console.log(`${file} line ${idx+1}: ${l}`);
    }
  });
}

findRules('assets/css/style.css');
findRules('assets/css/responsive.css');

