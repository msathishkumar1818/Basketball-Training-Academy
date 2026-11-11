const fs = require('fs');
const html = fs.readFileSync('coaches.html', 'utf8');

const start = html.indexOf('<section class="section-credentials-bar"');
const end = html.indexOf('</section>', start) + 10;

console.log('START INDEX:', start, 'END INDEX:', end);
console.log(html.substring(start, end));

