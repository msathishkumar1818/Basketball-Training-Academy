const fs = require('fs');

const heroHome2 = fs.statSync('assets/images/hero/hero-home2.jpg');
console.log('hero-home2.jpg size:', heroHome2.size);

// Check hero-home1.jpg
const heroHome1 = fs.statSync('assets/images/hero/hero-home1.jpg');
console.log('hero-home1.jpg size:', heroHome1.size);

// Check other images
const secImages = fs.readdirSync('assets/images/sections');
console.log('Section images:', secImages);

const bgImages = fs.readdirSync('assets/images/backgrounds');
console.log('Background images:', bgImages);

