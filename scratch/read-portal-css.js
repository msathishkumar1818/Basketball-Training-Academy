const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const regex = /(\.portal-[^{]+)\{([^}]+)\}/g;
let match;
while ((match = regex.exec(css)) !== null) {
  const sel = match[1].trim();
  const body = match[2].trim().replace(/\s+/g, ' ');
  console.log(`${sel} { ${body} }`);
}

