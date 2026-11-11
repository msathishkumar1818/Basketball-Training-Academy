const fs = require('fs');
const pages = ['index.html', 'home-2.html', 'about.html', 'programs.html', 'coaches.html', 'contact.html', 'dashboard.html', 'login.html'];
pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  console.log('=== ' + p + ' ===');
  const ctaMatches = content.match(/<section[^>]*class="[^"]*cta[^"]*"[\s\S]*?<\/section>/gi) || [];
  ctaMatches.forEach((m, idx) => {
    const h = m.match(/<h[1-4][^>]*>[\s\S]*?<\/h[1-4]>/gi);
    console.log('  CTA ' + idx + ': ' + (h ? h.map(x => x.replace(/<[^>]+>/g, '').trim()).join(' | ') : 'no heading'));
  });
});

