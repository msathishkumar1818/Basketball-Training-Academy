const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// Check for fixed pixel widths that could cause horizontal overflow on mobile (< 360px)
const combined = css + '\n' + resp;
const lines = combined.split('\n');

const fixedWidths = [];
lines.forEach((l, i) => {
  const match = l.match(/width:\s*([4-9]\d{2}|[1-9]\d{3})px/i);
  if (match) {
    fixedWidths.push({ line: i + 1, text: l.trim(), width: match[1] });
  }
});

console.log('Fixed widths >= 400px:');
fixedWidths.forEach(f => console.log(`Width ${f.width}px: ${f.text}`));

