const fs = require('fs');

const files = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html'];
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('CERTIFIED ACCREDITATION STANDARD') || content.includes('Industry Credentials') || content.includes('USA BASKETBALL GOLD')) {
    console.log(`Found in: ${f}`);
    const lines = content.split('\n');
    lines.forEach((l, idx) => {
      if (l.includes('CERTIFIED ACCREDITATION') || l.includes('Industry Credentials') || l.includes('FIBA LICENSED')) {
        console.log(`  Line ${idx+1}: ${l.trim()}`);
      }
    });
  }
});

