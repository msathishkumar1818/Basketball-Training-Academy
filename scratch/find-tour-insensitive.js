const fs = require('fs');

const files = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.toLowerCase().includes('18,000') || l.toLowerCase().includes('tour our')) {
      console.log(`${f} line ${idx+1}: ${l}`);
    }
  });
});

