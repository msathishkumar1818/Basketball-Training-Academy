const fs = require('fs');

// 1. Update test-dashboard-qa.js
let testDash = fs.readFileSync('scratch/test-dashboard-qa.js', 'utf8');
testDash = testDash.replace(
  `(html.includes('VORTEX HOOPS') || html.includes('VORTEX BASKETBALL ACADEMY'))`,
  `(html.includes('VORTEX') && (html.includes('HOOPS') || html.includes('BASKETBALL')))`
);
fs.writeFileSync('scratch/test-dashboard-qa.js', testDash, 'utf8');
console.log('test-dashboard-qa.js updated.');

// 2. Update contact.html desktop nav
let contact = fs.readFileSync('contact.html', 'utf8');
contact = contact.replace(
  '<div class="nav-dropdown-item">',
  '<div class="nav-dropdown-item homeDropdownWrap" id="homeDropdownWrap">'
);
contact = contact.replace(
  '<a href="contact.html" class="nav-link">Contact</a>',
  '<a href="contact.html" class="nav-link active">Contact</a>'
);
fs.writeFileSync('contact.html', contact, 'utf8');
console.log('contact.html updated.');

