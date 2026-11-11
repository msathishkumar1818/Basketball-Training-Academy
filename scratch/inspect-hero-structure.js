const fs = require('fs');
['about.html', 'programs.html', 'coaches.html', 'contact.html'].forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  const m = content.match(/<section[^>]*class="[^"]*inner-page-hero[^"]*"[\s\S]*?<\/section>/i);
  if (m) {
    console.log('=== ' + p + ' ===');
    const lines = m[0].split('\n').slice(0, 25);
    lines.forEach(l => console.log(l));
  }
});

