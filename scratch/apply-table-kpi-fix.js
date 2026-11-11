const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

// Update KPI card val, footer, and desc for perfect text alignment
const oldKpiCardVal = `.portal-kpi-val {
  font-family: 'Oswald', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-bright);
  line-height: 1.15;
  margin-bottom: 0.35rem;
}`;

const newKpiCardVal = `.portal-kpi-val {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(1.2rem, 3.2vw, 1.45rem);
  font-weight: 700;
  color: var(--text-bright);
  line-height: 1.15;
  margin-bottom: 0.35rem;
  white-space: nowrap;
}`;

if (css.includes(oldKpiCardVal)) {
  css = css.replace(oldKpiCardVal, newKpiCardVal);
}

const oldKpiFooter = `.portal-kpi-footer {
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.74rem;
  font-weight: 600;
}`;

const newKpiFooter = `.portal-kpi-footer {
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.76rem;
  font-weight: 600;
}`;

if (css.includes(oldKpiFooter)) {
  css = css.replace(oldKpiFooter, newKpiFooter);
}

// Update table wrap and table styles to enforce min-width and horizontal scroll
const oldTableCss = `.dash-table-wrap {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow-x: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.dash-schedule-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

[dir="rtl"] .dash-schedule-table {
  text-align: right;
}

.dash-schedule-table th {
  background-color: var(--bg-elevated);
  font-family: 'Oswald', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-bright);
  padding: 1.1rem 1.4rem;
  border-bottom: 1px solid var(--border-strong);
}

.dash-schedule-table td {
  padding: 1.1rem 1.4rem;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.45;
  vertical-align: middle;
}`;

const newTableCss = `.dash-table-wrap {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  width: 100%;
}

.dash-schedule-table {
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  text-align: left;
}

[dir="rtl"] .dash-schedule-table {
  text-align: right;
}

.dash-schedule-table th {
  background-color: var(--bg-elevated);
  font-family: 'Oswald', sans-serif;
  font-size: 0.86rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-bright);
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-strong);
  white-space: nowrap;
}

.dash-schedule-table td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.45;
  vertical-align: middle;
  white-space: nowrap;
}`;

if (css.includes(oldTableCss)) {
  css = css.replace(oldTableCss, newTableCss);
  console.log('style.css table styles updated successfully.');
} else {
  console.error('ERROR: oldTableCss not found in style.css');
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');

// 2. Update responsive.css
let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// Fix KPI grid in responsive.css:
// In max-width: 1032px: 2 columns
resp = resp.replace(
  `.portal-section-kpis {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1.15rem !important;
  }`,
  `.portal-section-kpis {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.15rem;
  }`
);

// In max-width: 768px: ensure KPI grid is 1 column !important
resp = resp.replace(
  `  .portal-section-kpis {
    grid-template-columns: 1fr;
    gap: 1rem;
  }`,
  `  .portal-section-kpis {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }`
);

// Also under @media (max-width: 768px) and (max-width: 440px) ensure tables and cards are 100% clean
const targetResp768 = `.portal-welcome-actions {
    width: 100%;
    flex-wrap: wrap;
  }`;

const replacementResp768 = `.portal-welcome-actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .portal-section-kpis {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }

  .dash-table-wrap {
    width: 100%;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch;
  }

  .dash-schedule-table {
    min-width: 680px !important;
  }`;

if (resp.includes(targetResp768)) {
  resp = resp.replace(targetResp768, replacementResp768);
  console.log('responsive.css 768px table & KPI rules updated.');
}

fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');
console.log('Both style.css and responsive.css updated successfully.');

