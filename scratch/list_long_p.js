const fs = require('fs');

function showParagraphs(file) {
  console.log(`=== ${file} ===`);
  const content = fs.readFileSync(file, 'utf8');
  const ps = content.match(/<p[^>]*>[\s\S]*?<\/p>/g) || [];
  ps.forEach((p, idx) => {
    const clean = p.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    if (clean.length > 60) {
      console.log(`[P${idx+1}] (${clean.split(' ').length} words): ${clean}`);
    }
  });
}

['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'].forEach(showParagraphs);

