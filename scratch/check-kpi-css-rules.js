const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const findKpis = (file, name) => {
  const lines = file.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('portal-section-kpis') || l.includes('portal-kpi-card') || l.includes('portal-kpi-footer')) {
      console.log(name, i + 1, l.trim());
    }
  });
};

findKpis(css, 'style.css:');
findKpis(resp, 'responsive.css:');

