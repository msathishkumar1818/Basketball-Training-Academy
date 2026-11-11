const fs = require('fs');

// 1. Update dashboard.html
let dash = fs.readFileSync('dashboard.html', 'utf8');

const oldBrand = `      <!-- Brand Logo & Portal Title -->
      <a href="index.html" class="portal-brand-block" aria-label="Return to Vortex Academy Home">
        <img src="assets/images/icons/logo.svg" alt="Vortex Logo" class="brand-logo-img" width="36" height="36">
        <div class="portal-brand-titles">
          <span class="portal-brand-main">VORTEX BASKETBALL ACADEMY</span>
          <span class="portal-brand-sub">PLAYER PERFORMANCE DASHBOARD</span>
        </div>
      </a>`;

const newBrand = `      <!-- Brand Logo & Portal Title (Matched Exactly to Home 1) -->
      <a href="index.html" class="brand-link portal-brand-block" aria-label="Return to Vortex Basketball Academy Home">
        <img src="assets/images/icons/logo.svg" alt="Vortex Logo" class="brand-logo-img" width="36" height="36">
        <div class="brand-text-group portal-brand-titles">
          <span class="brand-title portal-brand-main">VORTEX <span>HOOPS</span></span>
          <span class="brand-tagline portal-brand-sub">TRAINING ACADEMY</span>
        </div>
      </a>`;

if (dash.includes(oldBrand)) {
  dash = dash.replace(oldBrand, newBrand);
  fs.writeFileSync('dashboard.html', dash, 'utf8');
  console.log('dashboard.html brand updated successfully.');
} else {
  console.error('ERROR: oldBrand not found in dashboard.html');
}

// 2. Update style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

// Brand styling for portal
const oldPortalBrandCss = `.portal-brand-main {
  font-family: 'Oswald', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-bright);
  line-height: 1.1;
  letter-spacing: 0.04em;
}

.portal-brand-sub {
  font-family: 'Oswald', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}`;

const newPortalBrandCss = `.portal-brand-main {
  font-family: 'Oswald', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-bright);
  text-transform: uppercase;
  line-height: 1.1;
}

.portal-brand-main span {
  color: var(--color-primary);
}

.portal-brand-sub {
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  margin-top: 2px;
}`;

if (css.includes(oldPortalBrandCss)) {
  css = css.replace(oldPortalBrandCss, newPortalBrandCss);
  console.log('Portal brand CSS updated.');
} else {
  console.error('ERROR: oldPortalBrandCss not found in style.css');
}

// Sidebar styling: fixed/sticky without any internal scroll
const oldSidebarCss = `/* Left Sidebar Navigation (Sticky Locked in Desktop Viewport) */
.portal-app-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: sticky;
  top: calc(64px + 1.75rem);
  width: 240px;
  max-height: calc(100vh - 64px - 2.5rem);
  overflow-y: auto;
  scrollbar-width: thin;
  z-index: 100;
}`;

const newSidebarCss = `/* Left Sidebar Navigation (Locked Fixed in Desktop Viewport, Zero Internal Scroll) */
.portal-app-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: calc(64px + 1.25rem);
  width: 240px;
  height: fit-content;
  overflow: visible;
  z-index: 100;
  align-self: flex-start;
}`;

if (css.includes(oldSidebarCss)) {
  css = css.replace(oldSidebarCss, newSidebarCss);
  console.log('Sidebar container CSS updated.');
} else {
  console.error('ERROR: oldSidebarCss not found in style.css');
}

// Compact sidebar elements so everything fits cleanly on any screen
const oldSidebarElementsCss = `.portal-sidebar-nav-box {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.25rem 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.portal-menu-header {
  font-family: 'Oswald', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-soft);
  margin-bottom: 0.85rem;
  padding: 0 0.65rem;
}

.portal-menu-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.portal-menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 0.85rem;
  border-radius: 8px;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.portal-menu-item:hover {
  background-color: var(--bg-elevated);
  color: var(--text-bright);
}

.portal-menu-item.active {
  background-color: rgba(255, 85, 0, 0.12);
  color: var(--color-primary);
  font-weight: 700;
}

.portal-menu-item svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

/* Mentor On-Duty Desk Card (Reference Match) */
.portal-mentor-desk {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1.25rem 1.15rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.portal-mentor-title {
  font-family: 'Oswald', sans-serif;
  font-size: 0.86rem;
  font-weight: 700;
  color: var(--text-bright);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.45rem;
}

.portal-mentor-desc {
  font-size: 0.76rem;
  color: var(--text-soft);
  line-height: 1.45;
  margin-bottom: 0.85rem;
}`;

const newSidebarElementsCss = `.portal-sidebar-nav-box {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1rem 0.85rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.portal-menu-header {
  font-family: 'Oswald', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-soft);
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
}

.portal-menu-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.portal-menu-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.52rem 0.75rem;
  border-radius: 8px;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.portal-menu-item:hover {
  background-color: var(--bg-elevated);
  color: var(--text-bright);
}

.portal-menu-item.active {
  background-color: rgba(255, 85, 0, 0.12);
  color: var(--color-primary);
  font-weight: 700;
}

.portal-menu-item svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
}

/* Mentor On-Duty Desk Card (Reference Match) */
.portal-mentor-desk {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1rem 0.85rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.portal-mentor-title {
  font-family: 'Oswald', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-bright);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
}

.portal-mentor-desc {
  font-size: 0.74rem;
  color: var(--text-soft);
  line-height: 1.4;
  margin-bottom: 0.65rem;
}`;

if (css.includes(oldSidebarElementsCss)) {
  css = css.replace(oldSidebarElementsCss, newSidebarElementsCss);
  console.log('Sidebar elements CSS updated.');
} else {
  console.error('ERROR: oldSidebarElementsCss not found in style.css');
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');

// 3. Update test-dashboard-qa.js
let testDash = fs.readFileSync('scratch/test-dashboard-qa.js', 'utf8');
testDash = testDash.replace(
  `html.includes('VORTEX BASKETBALL ACADEMY')`,
  `(html.includes('VORTEX HOOPS') || html.includes('VORTEX BASKETBALL ACADEMY'))`
);
fs.writeFileSync('scratch/test-dashboard-qa.js', testDash, 'utf8');
console.log('test-dashboard-qa.js updated.');

