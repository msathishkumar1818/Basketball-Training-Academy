const fs = require('fs');
const html = fs.readFileSync('coaches.html', 'utf8');
const lines = html.split('\n');

lines.forEach((l, idx) => {
  if (l.includes('CERTIFIED ACCREDITATION STANDARD') || l.includes('Industry Credentials') || l.includes('USA Basketball Gold')) {
    console.log(`${idx+1}: ${l}`);
  }
});

