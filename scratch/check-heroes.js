const fs = require('fs');

const pages = ['about.html', 'contact.html', 'programs.html', 'coaches.html'];
pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const heroMatch = content.match(/<section[^>]*class="[^"]*hero[^"]*"[\s\S]*?<\/section>/);
  console.log(`=== HERO IN ${p} ===`);
  if (heroMatch) {
    console.log(heroMatch[0].substring(0, 400));
  } else {
    console.log('Hero not found!');
  }
});

