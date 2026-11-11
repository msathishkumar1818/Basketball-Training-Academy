const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

console.log('--- Search in index.html for mobile / drawer / login ---');
const headerMatch = index.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('Header:\n', headerMatch[0]);
}

const drawerMatch = index.match(/<div[^>]*class="[^"]*mobile[^"]*"[\s\S]*?<\/div>/i) || index.match(/<div[^>]*id="mobile[^"]*"[\s\S]*?<\/div>/i);
if (drawerMatch) {
  console.log('Drawer snippet:\n', drawerMatch[0].substring(0, 500));
}
