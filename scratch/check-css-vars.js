const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const rootMatch = css.match(/:root\s*\{[^}]*\}/);
console.log('--- :root VARIABLES ---');
if (rootMatch) {
  const vars = rootMatch[0].match(/--[a-zA-Z0-9_-]+:[^;]+;/g);
  console.log(vars ? vars.join('\n') : 'None');
}

const darkMatch = css.match(/\[data-theme="dark"\]\s*\{[^}]*\}/);
console.log('--- DARK VARIABLES ---');
if (darkMatch) {
  const darkVars = darkMatch[0].match(/--[a-zA-Z0-9_-]+:[^;]+;/g);
  console.log(darkVars ? darkVars.join('\n') : 'None');
}

