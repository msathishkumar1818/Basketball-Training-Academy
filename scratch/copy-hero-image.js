const fs = require('fs');

const src = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\hero_home2_1794340580890.jpg';
const dest = 'assets/images/hero/hero-home2.jpg';

fs.copyFileSync(src, dest);
console.log('Successfully copied new basketball hero image to', dest);
const stat = fs.statSync(dest);
console.log('New hero-home2.jpg size:', stat.size);

