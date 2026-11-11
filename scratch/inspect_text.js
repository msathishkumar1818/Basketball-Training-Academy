const fs = require('fs');

const files = [
  'index.html',
  'home-2.html',
  'programs.html',
  'coaches.html',
  'about.html',
  'dashboard.html',
  'contact.html',
  'login.html'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const ps = content.match(/<p[^>]*>[\s\S]*?<\/p>/g) || [];
  const words = content.replace(/<[^>]+>/g, ' ').match(/\S+/g) || [];
  console.log(`${file}: ${ps.length} paragraphs, ~${words.length} total words`);
});

