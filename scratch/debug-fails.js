const fs = require('fs');

console.log('--- test-dashboard-qa.js line 70 ---');
const testDash = fs.readFileSync('scratch/test-dashboard-qa.js', 'utf8');
const lines = testDash.split('\n');
lines.slice(65, 80).forEach((l, i) => console.log(i + 66, l));

console.log('--- contact.html desktop nav ---');
const contact = fs.readFileSync('contact.html', 'utf8');
const navMatch = contact.match(/<nav class="desktop-nav"[\s\S]*?<\/nav>/i);
if (navMatch) console.log(navMatch[0]);

