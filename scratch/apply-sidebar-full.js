const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

const targetSnippet = `/* Full Portal Application Two-Column Layout */
.portal-app-layout {
  padding: calc(64px + 1.75rem) 0 3.5rem;
  background-color: var(--bg-body);
  min-height: 100vh;
}

.portal-app-grid {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  align-items: flex-start;
}

/* Left Sidebar Navigation (Locked Fixed in Desktop Viewport, Zero Internal Scroll) */
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
}

[dir="rtl"] .portal-app-sidebar {
  left: auto;
  right: auto;
}`;

const replacementSnippet = `/* Full Portal Application Two-Column Layout (Full-Height Fixed Sidebar) */
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

.portal-app-main {
  margin-left: 250px;
  padding: 2rem 2.5rem 3.5rem 2.5rem;
  max-width: 1350px;
}

[dir="rtl"] .portal-app-main {
  margin-left: 0;
  margin-right: 250px;
}`;

if (css.includes(targetSnippet)) {
  css = css.replace(targetSnippet, replacementSnippet);
  console.log('portal-app-sidebar & layout updated successfully in style.css');
} else {
  console.error('ERROR: targetSnippet not found in style.css');
}

// Update .portal-sidebar-nav-box to seamlessly integrate into full sidebar panel
const oldNavBoxCss = `.portal-sidebar-nav-box {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1rem 0.85rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}`;

const newNavBoxCss = `.portal-sidebar-nav-box {
  background-color: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: none;
}`;

if (css.includes(oldNavBoxCss)) {
  css = css.replace(oldNavBoxCss, newNavBoxCss);
  console.log('portal-sidebar-nav-box updated to seamless background');
} else {
  console.error('ERROR: oldNavBoxCss not found in style.css');
}

// Update .portal-mentor-desk to dock at bottom of full sidebar
const oldMentorCss = `.portal-mentor-desk {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 1rem 0.85rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}`;

const newMentorCss = `.portal-mentor-desk {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1rem 0.85rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  margin-top: auto;
}`;

if (css.includes(oldMentorCss)) {
  css = css.replace(oldMentorCss, newMentorCss);
  console.log('portal-mentor-desk updated to docked bottom card');
} else {
  console.error('ERROR: oldMentorCss not found in style.css');
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');

