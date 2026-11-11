const fs = require('fs');

const css = fs.readFileSync('assets/css/style.css', 'utf8');

function findRules(selector) {
  const regex = new RegExp(selector + '[^{]*\\{[^}]*\\}', 'g');
  const matches = css.match(regex);
  console.log(`=== RULES FOR ${selector} ===`);
  if (matches) {
    matches.forEach(m => console.log(m));
  } else {
    console.log('None found');
  }
}

findRules('\\.hero-home2');
findRules('\\.portal-top-bar');
findRules('\\.portal-app-sidebar');
findRules('\\.portal-app-container');

