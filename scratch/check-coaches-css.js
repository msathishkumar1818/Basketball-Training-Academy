const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('section-credentials') || l.includes('credentials-split') || l.includes('cred-ledger')) {
    console.log(`${idx+1}: ${l}`);
  }
});

