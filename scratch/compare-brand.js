const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const dash = fs.readFileSync('dashboard.html', 'utf8');

const getHeader = (html) => {
  const m = html.match(/<header[\s\S]*?<\/header>/i);
  return m ? m[0] : 'No header';
};

console.log('--- INDEX HEADER (first 30 lines) ---');
console.log(getHeader(index).split('\n').slice(0, 30).join('\n'));

console.log('--- DASHBOARD HEADER (first 30 lines) ---');
console.log(getHeader(dash).split('\n').slice(0, 30).join('\n'));

