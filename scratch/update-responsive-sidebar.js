const fs = require('fs');

let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const oldResponsiveSidebar = `  .portal-app-sidebar {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 900;
    background-color: var(--bg-body);
    padding: 0.5rem 1rem;
    margin: 0;
    border-bottom: 1px solid var(--border-subtle);
    max-height: none;
    overflow: visible;
    display: block;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }`;

const newResponsiveSidebar = `  .portal-app-sidebar {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: auto;
    width: 100%;
    height: auto;
    z-index: 900;
    background-color: var(--bg-body);
    padding: 0.5rem 1rem;
    margin: 0;
    border-right: none;
    border-bottom: 1px solid var(--border-subtle);
    max-height: none;
    overflow: visible;
    display: block;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }`;

if (resp.includes(oldResponsiveSidebar)) {
  resp = resp.replace(oldResponsiveSidebar, newResponsiveSidebar);
  fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');
  console.log('responsive.css updated successfully.');
} else {
  console.error('ERROR: oldResponsiveSidebar not found');
}

