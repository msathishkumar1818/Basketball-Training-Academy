const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');

const tabs = ['tab-overview', 'tab-booking', 'tab-skills', 'tab-shooting', 'tab-leagues', 'tab-profile'];
tabs.forEach(t => {
  const regex = new RegExp('<section[^>]*id="' + t + '"[\\s\\S]*?<\\/section>', 'g');
  const match = regex.exec(dash);
  if (match) {
    console.log(`=== ${t} (length: ${match[0].length}) ===`);
    const headings = match[0].match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/g);
    console.log('Headings:', headings);
  } else {
    console.log(`=== ${t} NOT FOUND ===`);
  }
});

