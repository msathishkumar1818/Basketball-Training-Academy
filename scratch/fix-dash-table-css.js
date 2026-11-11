const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

const targetSnippet = `.dash-table-wrap {
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
  font-weight: 500;
}`;

const replacementSnippet = `.dash-table-wrap {
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
  font-weight: 500;
  line-height: 1.45;
  vertical-align: middle;
  white-space: nowrap;
}`;

if (css.includes(targetSnippet)) {
  css = css.replace(targetSnippet, replacementSnippet);
  fs.writeFileSync('assets/css/style.css', css, 'utf8');
  console.log('dash-table-wrap & dash-schedule-table updated in style.css');
} else {
  console.error('ERROR: targetSnippet not matched');
}

