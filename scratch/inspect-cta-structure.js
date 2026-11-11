const fs = require('fs');
['about.html', 'programs.html', 'coaches.html', 'home-2.html', 'index.html', 'contact.html'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const m = content.match(/<section[^>]*class="[^"]*cta[^"]*"[\s\S]*?<\/section>/i);
  if (m) {
    console.log('=== ' + p + ' ===');
    const lines = m[0].split('\n').slice(0, 15);
    lines.forEach(l => console.log(l));
  }
});

