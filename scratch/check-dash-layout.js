const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');

const lines = dash.split('\n');
console.log('--- DASHBOARD STRUCTURE LINES 25-100 ---');
for (let i = 25; i < Math.min(100, lines.length); i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

const css = fs.readFileSync('assets/css/style.css', 'utf8');
const portalMatches = css.match(/\.portal-[a-zA-Z0-9_-]+\s*\{[^}]*\}/g);
console.log('\n--- PORTAL CSS RULES ---');
if (portalMatches) {
  portalMatches.forEach(m => console.log(m.replace(/\s+/g, ' ')));
}

