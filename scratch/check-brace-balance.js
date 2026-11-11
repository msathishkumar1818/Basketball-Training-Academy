const fs = require('fs');

function checkBraces(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  let open = 0, close = 0;
  for (let c of content) {
    if (c === '{') open++;
    if (c === '}') close++;
  }
  console.log(`${filename}: { = ${open}, } = ${close}, Balanced = ${open === close}`);
}

checkBraces('assets/css/style.css');
checkBraces('assets/css/responsive.css');

