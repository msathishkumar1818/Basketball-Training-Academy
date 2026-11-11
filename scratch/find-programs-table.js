const fs = require('fs');

const pages = ['index.html', 'home-2.html', 'about.html', 'programs.html', 'coaches.html', 'contact.html', 'dashboard.html', 'login.html'];
pages.forEach(p => {
  if (!fs.existsSync(p)) return;
  const c = fs.readFileSync(p, 'utf8');
  if (c.includes('Kinematic Shot Volume') || c.includes('Curriculum Focus') || c.includes('Court Allocation') || c.includes('TIME SLOT')) {
    console.log('FOUND IN:', p);
    const m = c.match(/<table[\s\S]*?<\/table>/g);
    if (m) {
      m.forEach((t, i) => {
        if (t.includes('Kinematic Shot Volume') || t.includes('Curriculum Focus')) {
          console.log(`Table ${i + 1} snippet:`);
          console.log(t.substring(0, 400));
        }
      });
    }
  }
});

