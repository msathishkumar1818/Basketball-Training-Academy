const fs = require('fs');

const pages = ['index.html', 'home-2.html', 'about.html', 'programs.html', 'coaches.html', 'contact.html'];
pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const fIdx = c.indexOf('<footer');
  const fEnd = c.indexOf('</footer>');
  console.log(`=== ${p} ===`);
  console.log('Footer length:', fEnd - fIdx);
});

