const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');
const sIdx = dash.indexOf('id="tab-skills"');
console.log(dash.substring(sIdx - 50, sIdx + 900));

