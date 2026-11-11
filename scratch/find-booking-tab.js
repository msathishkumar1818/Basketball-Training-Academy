const fs = require('fs');
const dash = fs.readFileSync('dashboard.html', 'utf8');

const bIdx = dash.indexOf('04:00 PM');
console.log('--- 04:00 PM snippet ---');
console.log(dash.substring(bIdx - 200, bIdx + 300));

const rIdx = dash.indexOf('RVATIONS');
console.log('--- RVATIONS snippet ---');
if (rIdx !== -1) {
  console.log(dash.substring(rIdx - 100, rIdx + 200));
} else {
  const resIdx = dash.indexOf('Reservations');
  if (resIdx !== -1) {
    console.log(dash.substring(resIdx - 100, resIdx + 200));
  }
}

