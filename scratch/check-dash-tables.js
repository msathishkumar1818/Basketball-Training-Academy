const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');

const tableMatches = dash.match(/<table[^>]*>[\s\S]*?<\/table>/g) || [];
console.log('Tables found in dashboard.html:', tableMatches.length);

tableMatches.forEach((t, i) => {
  const classMatch = t.match(/class="([^"]*)"/);
  const headerMatch = t.match(/<thead[\s\S]*?<\/thead>/);
  console.log(`\n--- Table ${i + 1} (${classMatch ? classMatch[1] : 'no class'}) ---`);
  if (headerMatch) console.log(headerMatch[0]);
});

