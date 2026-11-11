const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const tStart = css.indexOf('.telemetry-lbl');
console.log('--- telemetry snippet ---');
console.log(css.substring(tStart - 100, tStart + 200));

const hStart = css.indexOf('.inner-hero-desc');
console.log('--- hero snippet ---');
console.log(css.substring(hStart - 50, hStart + 250));

const cStart = css.indexOf('.section-contact-cta');
console.log('--- contact cta snippet ---');
console.log(css.substring(cStart - 50, cStart + 350));

