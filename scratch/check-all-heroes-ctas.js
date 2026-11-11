const fs = require('fs');

const pages = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  // Check hero classes
  const heroMatches = c.match(/class="[^"]*hero[^"]*"/g) || [];
  const ctaMatches = c.match(/class="[^"]*cta[^"]*"/g) || [];
  console.log(`=== ${p} ===`);
  console.log('Hero classes:', [...new Set(heroMatches)].slice(0, 5));
  console.log('CTA classes:', [...new Set(ctaMatches)].slice(0, 5));
});

