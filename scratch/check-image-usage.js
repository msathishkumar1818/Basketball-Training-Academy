const fs = require('fs');

const htmlFiles = ['index.html', 'home-2.html', 'programs.html', 'coaches.html', 'about.html', 'dashboard.html', 'contact.html', 'login.html'];
const usage = {};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/assets\/images\/[^"'\s)]+/g) || [];
  matches.forEach(img => {
    usage[img] = usage[img] || [];
    usage[img].push(file);
  });
});

console.log('=== IMAGE USAGE ACROSS HTML FILES ===');
Object.keys(usage).sort().forEach(img => {
  console.log(`${img} -> [${usage[img].join(', ')}]`);
});

