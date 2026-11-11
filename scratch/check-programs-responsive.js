const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const classes = ['section-program-tiers', 'section-masterclasses', 'section-schedule-blocks', 'tier-card', 'masterclass-card'];
const lines = resp.split('\n');

lines.forEach((l, i) => {
  classes.forEach(c => {
    if (l.includes(c)) console.log(`Line ${i + 1}: ${l.trim()}`);
  });
});

