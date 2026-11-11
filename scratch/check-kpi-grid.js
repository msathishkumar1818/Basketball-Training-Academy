const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const searchKpi = (str, label) => {
  const lines = str.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('portal-kpi-grid') || l.includes('portal-kpi-card')) {
      console.log(label, i + 1, l.trim());
    }
  });
};

searchKpi(css, 'style.css:');
searchKpi(resp, 'responsive.css:');

