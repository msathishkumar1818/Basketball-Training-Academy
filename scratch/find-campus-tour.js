const fs = require('fs');

const files = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('18,000 SQ FT') || content.includes('TOUR OUR 18,000')) {
    console.log(`Found in ${f}`);
  }
});

