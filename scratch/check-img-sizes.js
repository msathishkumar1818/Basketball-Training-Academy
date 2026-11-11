const fs = require('fs');

const files = [
  'assets/images/sections/dashboard-hero.jpg',
  'assets/images/sections/login-auth-bg.jpg',
  'assets/images/backgrounds/cta-court-dark.jpg',
  'assets/images/backgrounds/cta-combine-dark.jpg',
  'assets/images/sections/shooting-protocol.jpg'
];

files.forEach(f => {
  const stat = fs.statSync(f);
  console.log(f, 'Size:', stat.size);
});

