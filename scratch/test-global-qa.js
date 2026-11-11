const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const responsive = fs.readFileSync('assets/css/responsive.css', 'utf8');
const js = fs.readFileSync('assets/js/main.js', 'utf8');

console.log('=== GLOBAL SYSTEM QA VERIFICATION ===');

// Check navigation count
const navBlock = html.substring(html.indexOf('<nav class="desktop-nav"'), html.indexOf('</nav>'));
const navItems = (navBlock.match(/class="nav-link|class="nav-dropdown-item/g) || []);
// Notice: the dropdown button itself has class="nav-link nav-dropdown-btn" inside nav-dropdown-item.
// Let's count direct children or distinct sections:
const directNavRegex = /<!-- \d+\.\s+([^>]+) -->/g;
let match;
const foundItems = [];
while ((match = directNavRegex.exec(navBlock)) !== null) {
  foundItems.push(match[1].trim());
}
console.log('Direct Navigation Items found in Desktop Nav:', foundItems);
console.log('Count:', foundItems.length, '(Must be exactly 6)');

// Check emojis
const emojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
console.log('No emojis in HTML:', !emojiRegex.test(html));
console.log('No emojis in CSS:', !emojiRegex.test(css));
console.log('No emojis in JS:', !emojiRegex.test(js));

// Check dark mode
console.log('Dark mode strictly #000000:', css.includes('--bg-body: #000000;'));
console.log('No #181818 in body bg:', !css.includes('--bg-body: #181818;'));
console.log('No #1F1F1F in body bg:', !css.includes('--bg-body: #1F1F1F;'));
console.log('No #222222 in body bg:', !css.includes('--bg-body: #222222;'));
console.log('No #242424 in body bg:', !css.includes('--bg-body: #242424;'));

// Check RTL persistence logic
console.log('RTL dir controller present in JS:', js.includes("document.documentElement.setAttribute('dir'") && js.includes('localStorage'));

// Check Click-only dropdown logic
console.log('Click-only dropdown present in JS:', js.includes('.nav-dropdown-btn') && !js.includes('mouseenter'));

// Check Mobile auto-close logic
console.log('Mobile auto close links present in JS:', js.includes('allDrawerNavLinks.forEach'));

// Check Inline CSS / JS in HTML
const hasInlineStyleTag = html.includes('<style');
const hasInlineScriptTag = /<script>(?!<\/script>)/.test(html);
console.log('Zero <style> tags in HTML:', !hasInlineStyleTag);
console.log('Zero inline <script> logic in HTML:', !hasInlineScriptTag);

