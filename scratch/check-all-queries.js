const fs = require('fs');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const regex = /@media[^{]+\{([\s\S]+?)(?=@media|$)/g;
let m;
while ((m = regex.exec(resp)) !== null) {
  const query = m[0].substring(0, m[0].indexOf('{')).trim();
  const body = m[1];
  if (body.includes('portal-app-main') || body.includes('portal-app-layout') || body.includes('portal-app-sidebar')) {
    console.log(`\n=== QUERY: ${query} ===`);
    const lines = body.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('portal-app-main') || l.includes('portal-app-layout') || l.includes('portal-app-sidebar')) {
        console.log(l.trim());
      }
    });
  }
}

