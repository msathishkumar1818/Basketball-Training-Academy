const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

const list = [
  'about-hero.jpg',
  'cta-about-dark.jpg',
  'cta-coaches-dark.jpg',
  'cta-combine-dark.jpg',
  'cta-contact-dark.jpg',
  'cta-court-dark.jpg',
  'cta-dashboard-dark.jpg',
  'cta-programs-dark.jpg',
  'coaches-hero.jpg',
  'contact-hero.jpg',
  'dashboard-hero.jpg',
  'login-auth-bg.jpg',
  'programs-hero.jpg'
];

list.forEach(img => {
  console.log(img, 'in style.css:', css.includes(img));
});

