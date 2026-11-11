const fs = require('fs');

const pages = ['index.html', 'home-2.html', 'about.html', 'programs.html', 'coaches.html', 'contact.html', 'dashboard.html', 'login.html'];
pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const c = fs.readFileSync(p, 'utf8');
  const tables = c.match(/<table[^>]*>[\s\S]*?<\/table>/gi) || [];
  if (tables.length > 0) {
    console.log(`\n=== PAGE: ${p} (${tables.length} tables) ===`);
    tables.forEach((t, i) => {
      const classMatch = t.match(/class="([^"]*)"/i);
      const parentMatch = c.substring(c.indexOf(t) - 150, c.indexOf(t)).match(/<div[^>]*class="([^"]*)"[^>]*>/i);
      console.log(`  Table ${i + 1}: class="${classMatch ? classMatch[1] : 'none'}", Parent: class="${parentMatch ? parentMatch[1] : 'none'}"`);
    });
  }
});

