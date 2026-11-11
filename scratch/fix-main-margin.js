const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

// 1. Clean up first definition of portal-app-main at line 2731
const target1 = `.portal-app-main {
  margin-left: 250px;
  padding: 2rem 2.5rem 3.5rem 2.5rem;
  max-width: 1350px;
}

[dir="rtl"] .portal-app-main {
  margin-left: 0;
  margin-right: 250px;
}`;

// We will replace target1 with a clean unified main layout rule
const replacement1 = `/* Right Main Panel Workspace (Clear of Fixed Left Sidebar) */
.portal-app-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  min-width: 0;
  margin-left: 270px;
  padding: 2rem 2.5rem 3.5rem 1.5rem;
  max-width: calc(100% - 270px);
}

[dir="rtl"] .portal-app-main {
  margin-left: 0;
  margin-right: 270px;
}`;

if (css.includes(target1)) {
  css = css.replace(target1, replacement1);
  console.log('Target 1 replaced.');
} else {
  console.error('ERROR: Target 1 not found in style.css');
}

// 2. Remove the conflicting second definition of portal-app-main at line 2880
const target2 = `/* Right Main Panel Sections Stack */
.portal-app-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  min-width: 0;
  margin-left: 0;
  margin-right: 0;
}

[dir="rtl"] .portal-app-main {
  margin-left: 0;
  margin-right: 0;
}`;

const replacement2 = `/* Right Main Panel Sections Stack - Spacing Handled in Workspace */`;

if (css.includes(target2)) {
  css = css.replace(target2, replacement2);
  console.log('Target 2 replaced.');
} else {
  console.error('ERROR: Target 2 not found in style.css');
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('style.css updated successfully.');

