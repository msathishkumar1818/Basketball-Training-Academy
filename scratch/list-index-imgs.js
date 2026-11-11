const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const imgs = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
console.log('Count:', imgs.length);
console.log(imgs);

