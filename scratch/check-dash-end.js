const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');
const lines = dash.split('\n');
console.log('Total lines in dashboard.html:', lines.length);

for (let i = 350; i < Math.min(450, lines.length); i++) {
  if (lines[i].includes('section') || lines[i].includes('tab-')) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}

for (let i = Math.max(0, lines.length - 80); i < lines.length; i++) {
  if (lines[i].includes('section') || lines[i].includes('tab-') || lines[i].includes('</main>') || lines[i].includes('footer')) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}

