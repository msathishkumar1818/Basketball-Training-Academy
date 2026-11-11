const fs = require('fs');

// 1. Update assets/css/style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const oldPortalLayout = `/* Full Portal Application Two-Column Layout (Full-Height Fixed Sidebar) */
.portal-app-layout {
  padding-top: 64px;
  padding-bottom: 3.5rem;
  background-color: var(--bg-body);
  min-height: 100vh;
}

.portal-app-grid {
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* Left Sidebar Navigation (Full-Height 100vh Fixed Panel, Zero Page Scroll) */
.portal-app-sidebar {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 250px;
  height: calc(100vh - 64px);
  background-color: var(--bg-card);
  border-right: 1px solid var(--border-subtle);
  padding: 1.5rem 1rem 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  overflow-y: auto;
  scrollbar-width: thin;
  z-index: 800;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.03);
}

[dir="rtl"] .portal-app-sidebar {
  left: auto;
  right: 0;
  border-right: none;
  border-left: 1px solid var(--border-subtle);
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.03);
}

/* Right Main Panel Workspace (Clear of Fixed Left Sidebar) */
.portal-app-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  min-width: 0;
  margin-left: 270px;
  padding: 2rem 2.5rem 3.5rem 1.5rem;
  max-width: calc(100% - 270px);
}

[dir="rtl"] .portal-app-main {
  margin-left: 0;
  margin-right: 270px;
}`;

const newPortalLayout = `/* Full Portal Application Two-Column Layout */
.portal-app-layout {
  padding-top: calc(64px + 54px + 1rem);
  padding-bottom: 3.5rem;
  background-color: var(--bg-body);
  min-height: 100vh;
}

.portal-app-grid {
  display: block;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

/* Base Main Panel Workspace (Mobile & Tablet: 100% Full-Width) */
.portal-app-main {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding: 1.25rem 1rem 3.5rem 1rem;
}

/* Left Sidebar Base (Mobile & Tablet Horizontal Scroll Bar) */
.portal-app-sidebar {
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
}

/* Desktop Only: Full-Height Fixed Left Sidebar + Offset Workspace */
@media (min-width: 1025px) {
  .portal-app-layout {
    padding-top: 64px;
    padding-bottom: 3.5rem;
  }

  .portal-app-sidebar {
    position: fixed;
    top: 64px;
    left: 0;
    bottom: 0;
    right: auto;
    width: 250px;
    height: calc(100vh - 64px);
    background-color: var(--bg-card);
    border-right: 1px solid var(--border-subtle);
    border-bottom: none;
    padding: 1.5rem 1rem 1.25rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.25rem;
    overflow-y: auto;
    scrollbar-width: thin;
    z-index: 800;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.03);
  }

  [dir="rtl"] .portal-app-sidebar {
    left: auto;
    right: 0;
    border-right: none;
    border-left: 1px solid var(--border-subtle);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.03);
  }

  .portal-app-main {
    margin-left: 270px;
    padding: 2rem 2.5rem 3.5rem 1.5rem;
    max-width: calc(100% - 270px);
    width: calc(100% - 270px);
  }

  [dir="rtl"] .portal-app-main {
    margin-left: 0;
    margin-right: 270px;
  }
}`;

if (css.includes(oldPortalLayout)) {
  css = css.replace(oldPortalLayout, newPortalLayout);
  fs.writeFileSync('assets/css/style.css', css, 'utf8');
  console.log('style.css portal layout updated successfully.');
} else {
  console.error('ERROR: oldPortalLayout not found in style.css');
}

// 2. Update assets/css/responsive.css to ensure all mobile/tablet breakpoints explicitly handle portal-app-main
let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// In @media (max-width: 1024px)
const oldResp1024 = `  .portal-app-main {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }

  [dir="rtl"] .portal-app-main {
    margin-left: 0;
    margin-right: 0;
  }`;

const newResp1024 = `  .portal-app-main {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 1.25rem 1rem 3.5rem 1rem !important;
  }

  [dir="rtl"] .portal-app-main {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }`;

if (resp.includes(oldResp1024)) {
  resp = resp.replace(oldResp1024, newResp1024);
  console.log('responsive.css 1024px query updated.');
} else {
  console.error('ERROR: oldResp1024 not found');
}

// In @media (max-width: 768px)
const target768 = `@media (max-width: 768px) {`;
const addition768 = `@media (max-width: 768px) {
  .portal-app-main {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 1rem 0.85rem 3rem 0.85rem !important;
  }

  .portal-section-welcome {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.5rem 1.25rem;
  }

  .portal-welcome-actions {
    width: 100%;
    flex-wrap: wrap;
  }`;

if (resp.includes(target768)) {
  resp = resp.replace(target768, addition768);
  console.log('responsive.css 768px query updated.');
}

// In @media (max-width: 440px)
const target440 = `@media (max-width: 440px) {`;
const addition440 = `@media (max-width: 440px) {
  .portal-app-main {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 1rem 0.65rem 2.5rem 0.65rem !important;
  }

  .portal-section-header-card,
  .portal-section-welcome {
    padding: 1.25rem 0.85rem !important;
  }

  .portal-welcome-actions a,
  .portal-welcome-actions button {
    width: 100% !important;
    justify-content: center !important;
  }`;

if (resp.includes(target440)) {
  resp = resp.replace(target440, addition440);
  console.log('responsive.css 440px query updated.');
}

// In @media (max-width: 360px)
const target360 = `@media (max-width: 360px) {`;
const addition360 = `@media (max-width: 360px) {
  .portal-app-main {
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0.85rem 0.5rem 2rem 0.5rem !important;
  }

  .portal-section-header-card,
  .portal-section-welcome {
    padding: 1rem 0.75rem !important;
  }`;

if (resp.includes(target360)) {
  resp = resp.replace(target360, addition360);
  console.log('responsive.css 360px query updated.');
}

// In @media (max-width: 1032px) and (max-width: 1180px): KPI grid 2x2
const target1032 = `@media (max-width: 1032px) {`;
const addition1032 = `@media (max-width: 1032px) {
  .portal-section-kpis {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1.15rem !important;
  }

  .portal-welcome-actions {
    flex-wrap: wrap;
  }`;

if (resp.includes(target1032)) {
  resp = resp.replace(target1032, addition1032);
  console.log('responsive.css 1032px query updated.');
}

fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');
console.log('responsive.css updated successfully.');

