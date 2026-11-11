const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');

// Find all tabs/sections
const tabPanels = dash.match(/<section[^>]*id="tab-[^>]*>/g);
console.log('Tab panels in dashboard.html:', tabPanels);

// Find script tags or references
const scripts = dash.match(/<script[\s\S]*?<\/script>/g);
console.log('Scripts in dashboard.html:', scripts ? scripts.map(s => s.substring(0, 100)) : 'None');

// Check main js file
const mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
const tabJs = mainJs.match(/tab|portal|sidebar/gi);
console.log('Occurrences of tab/portal/sidebar in main.js:', tabJs ? tabJs.length : 0);

// Print the portal tab switching logic from main.js
const lines = mainJs.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('portal-menu-item') || l.includes('data-tab') || l.includes('tab-overview')) {
    console.log(`main.js line ${idx+1}:`, l);
  }
});

