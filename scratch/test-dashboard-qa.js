const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'dashboard.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- DASHBOARD QA VERIFICATION (BASKETBALL ATHLETE PORTAL) ---');

// 1. Check sections count inside main (6 dedicated tab sections)
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error('FAIL: <main> element not found');
  process.exit(1);
}
const sections = mainMatch[1].match(/<section[\s\S]*?<\/section>/g) || [];
console.log(`Sections count in <main>: ${sections.length} (Expected: 6 for 6 sidebar tabs)`);
if (sections.length !== 6) {
  console.error(`FAIL: Expected exactly 6 sidebar tab sections, got ${sections.length}`);
  process.exit(1);
}

// 2. Check Portal Sidebar & Navigation for Basketball Academy
const hasSidebar = html.includes('portal-app-sidebar') && html.includes('Athlete Menu') && html.includes('Book Court Sessions') && html.includes('Track Skills &amp; Biometrics') && html.includes('Register for Leagues');
const hasCoachDesk = html.includes('portal-mentor-desk') && html.includes('Coach On-Duty Desk') && html.includes('Coach Marcus Thorne, USAB Gold Online');
console.log(`Portal sidebar with Athlete Menu: ${hasSidebar}`);
console.log(`Coach On-Duty Desk card: ${hasCoachDesk}`);
if (!hasSidebar || !hasCoachDesk) {
  console.error('FAIL: Sidebar or Coach On-Duty desk missing');
  process.exit(1);
}

// 3. Check Section 1: Overview Tab Content (Basketball Academy Match)
const overviewTab = sections[0];
const hasWelcome = overviewTab.includes('Welcome back, Marcus') && overviewTab.includes('+ Book Court Session') && overviewTab.includes('View Combine Scorecard');
console.log(`Overview Tab: Welcome Banner matching Marcus: ${hasWelcome}`);
if (!hasWelcome) {
  console.error('FAIL: Overview Welcome Banner does not match Marcus Thorne Jr.');
  process.exit(1);
}

// 4. Check 4 Symmetrical KPI Cards in Overview (Basketball Academy Match)
const kpiCardsCount = (overviewTab.match(/class=\"portal-kpi-card\"/g) || []).length;
const hasCourtDuty = overviewTab.includes('Court Duty') && overviewTab.includes('Tomorrow &bull; 07:00 AM');
const hasRepsLogged = overviewTab.includes('Reps Logged') && overviewTab.includes('12,450');
const hasCombineScore = overviewTab.includes('Combine Score') && overviewTab.includes('94.50');
const hasLeagueStatus = overviewTab.includes('League Status') && overviewTab.includes('Winter Combine 5v5');

console.log(`Overview: 4 KPI Cards count: ${kpiCardsCount} (Expected: 4)`);
console.log(`KPI cards match basketball content: ${hasCourtDuty && hasRepsLogged && hasCombineScore && hasLeagueStatus}`);
if (kpiCardsCount !== 4 || !hasCourtDuty || !hasRepsLogged || !hasCombineScore || !hasLeagueStatus) {
  console.error('FAIL: 4 KPI cards do not match basketball specifications');
  process.exit(1);
}

// 5. Check Schedule Highlights Table in Overview
const hasSchedule = overviewTab.includes('Schedule Highlights &amp; Upcoming Court Rotations') &&
                    overviewTab.includes('Kinematic Pick-and-Roll Decision Simulation') &&
                    overviewTab.includes('Launch Film');
console.log(`Overview: Schedule Highlights Table matching basketball rotations: ${hasSchedule}`);
if (!hasSchedule) {
  console.error('FAIL: Overview Schedule Highlights Table does not match basketball rotations');
  process.exit(1);
}

// 6. Check Tab Sections (6 Tabs for 6 Basketball Sidebar Items)
const tabIds = ['tab-overview', 'tab-booking', 'tab-skills', 'tab-shooting', 'tab-leagues', 'tab-profile'];
const allTabsPresent = tabIds.every(id => html.includes(`id="${id}"`));
console.log(`All 6 Basketball Sidebar Tab Panels present: ${allTabsPresent}`);
if (!allTabsPresent) {
  console.error('FAIL: One or more sidebar tab panels missing');
  process.exit(1);
}

// 7. Check Top Header (Fixed with Brand, RTL, Theme toggle, and Logout)
const hasTopHeader = html.includes('portal-top-bar') && (html.includes('VORTEX') && (html.includes('HOOPS') || html.includes('BASKETBALL'))) && html.includes('rtl-toggle-btn') && html.includes('theme-toggle-btn') && html.includes('Logout');
console.log(`Top Header with Brand, RTL, Theme toggle, and Logout: ${hasTopHeader}`);
if (!hasTopHeader) {
  console.error('FAIL: Top Header controls missing');
  process.exit(1);
}

// 8. Check Zero inline styles
const inlineStyles = html.match(/style=\"[^\"]*\"/g) || [];
console.log(`Inline style attributes: ${inlineStyles.length} (Expected: 0)`);
if (inlineStyles.length > 0) {
  console.error('FAIL: Found inline style attributes:', inlineStyles);
  process.exit(1);
}

// 9. Check Zero inline scripts
const inlineScripts = (html.match(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi) || []);
console.log(`Inline scripts in HTML: ${inlineScripts.length} (Expected: 0)`);
if (inlineScripts.length > 0) {
  console.error('FAIL: Found inline scripts in HTML');
  process.exit(1);
}

// 10. Check Zero emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
const emojis = html.match(emojiRegex) || [];
console.log(`Emojis found in HTML: ${emojis.length} (Expected: 0)`);
if (emojis.length > 0) {
  console.error('FAIL: Found emojis in HTML:', emojis);
  process.exit(1);
}

console.log('SUCCESS: Basketball Academy Dashboard 100% verified!');
