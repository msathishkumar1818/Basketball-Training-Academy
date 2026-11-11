const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const oldScheduleTable = `.schedule-table-wrap {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow-x: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.schedule-grid-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

[dir="rtl"] .schedule-grid-table {
  text-align: right;
}

.schedule-grid-table th {
  background-color: var(--bg-elevated);
  font-family: 'Oswald', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-bright);
  padding: 1.1rem 1.4rem;
  border-bottom: 1px solid var(--border-strong);
}

.schedule-grid-table td {
  padding: 1.1rem 1.4rem;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.88rem;
  color: var(--text-muted);
  font-weight: 500;
}`;

const newScheduleTable = `.schedule-table-wrap {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  width: 100%;
}

.schedule-grid-table {
  width: 100%;
  min-width: 720px;
  border-collapse: collapse;
  text-align: left;
}

[dir="rtl"] .schedule-grid-table {
  text-align: right;
}

.schedule-grid-table th {
  background-color: var(--bg-elevated);
  font-family: 'Oswald', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-bright);
  padding: 1.1rem 1.25rem;
  border-bottom: 1px solid var(--border-strong);
  white-space: nowrap;
}

.schedule-grid-table td {
  padding: 1.1rem 1.25rem;
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.88rem;
  color: var(--text-muted);
  font-weight: 500;
  white-space: nowrap;
  vertical-align: middle;
}`;

if (css.includes(oldScheduleTable)) {
  css = css.replace(oldScheduleTable, newScheduleTable);
  console.log('schedule-grid-table updated in style.css');
} else {
  console.error('ERROR: oldScheduleTable not found');
}

// Ensure .court-badge has white-space: nowrap
const oldCourtBadge = `.court-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  background-color: rgba(255, 85, 0, 0.1);
  border: 1px solid rgba(255, 85, 0, 0.3);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}`;

const newCourtBadge = `.court-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-size: 0.76rem;
  font-weight: 700;
  background-color: rgba(255, 85, 0, 0.1);
  border: 1px solid rgba(255, 85, 0, 0.3);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}`;

if (css.includes(oldCourtBadge)) {
  css = css.replace(oldCourtBadge, newCourtBadge);
  console.log('court-badge updated in style.css');
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');

// 2. Update responsive.css
let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

const oldRespTableRule = `  .dash-schedule-table th,
  .dash-schedule-table td,
  .schedule-grid-table th,
  .schedule-grid-table td {
    padding: 0.85rem 0.85rem;
    vertical-align: top;
  }`;

const newRespTableRule = `  .dash-schedule-table,
  .schedule-grid-table {
    min-width: 720px !important;
  }

  .dash-schedule-table th,
  .dash-schedule-table td,
  .schedule-grid-table th,
  .schedule-grid-table td {
    padding: 0.9rem 1.1rem !important;
    white-space: nowrap !important;
    vertical-align: middle !important;
  }

  .court-badge {
    white-space: nowrap !important;
  }`;

if (resp.includes(oldRespTableRule)) {
  resp = resp.replace(oldRespTableRule, newRespTableRule);
  console.log('responsive.css table rules updated.');
} else {
  console.error('ERROR: oldRespTableRule not found');
}

fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');
console.log('Files updated successfully.');

