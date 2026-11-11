const fs = require('fs');
const pages = ['index.html', 'home-2.html', 'about.html', 'programs.html', 'coaches.html', 'contact.html'];

pages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  if (!content.includes('footer-social-row')) throw new Error(p + ' missing footer-social-row');
  if (!content.includes('footer-social-pill')) throw new Error(p + ' missing footer-social-pill');
  if (!content.includes('Instagram')) throw new Error(p + ' missing Instagram');
  if (!content.includes('Facebook')) throw new Error(p + ' missing Facebook');
  if (!content.includes('YouTube')) throw new Error(p + ' missing YouTube');
  if (!content.includes('WhatsApp')) throw new Error(p + ' missing WhatsApp');
  console.log(p + ' footer verified OK');
});

// Check style.css
const styleCss = fs.readFileSync('assets/css/style.css', 'utf8');
if (!styleCss.includes('.footer-social-pill')) throw new Error('style.css missing .footer-social-pill');
if (!styleCss.includes('.footer-social-row')) throw new Error('style.css missing .footer-social-row');

// Check responsive.css
const respCss = fs.readFileSync('assets/css/responsive.css', 'utf8');
if (!respCss.includes('@media (max-width: 1032px)')) throw new Error('responsive.css missing 1032px');
if (!respCss.includes('@media (max-width: 768px)')) throw new Error('responsive.css missing 768px');
if (!respCss.includes('@media (max-width: 767px)')) throw new Error('responsive.css missing 767px');

console.log('ALL FOOTER QA VERIFICATIONS PASSED 100%!');

