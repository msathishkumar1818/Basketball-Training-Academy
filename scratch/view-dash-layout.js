const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');
const lines = dash.split('\n');
console.log('--- dashboard.html lines 75-170 ---');
lines.slice(75, 170).forEach((l, i) => console.log(i + 76, l));

