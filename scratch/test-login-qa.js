const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'login.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- LOGIN / AUTH PORTAL QA VERIFICATION ---');

// 1. Check Auth Modal Structure
const hasModal = html.includes('auth-card-modal') && html.includes('auth-banner-col') && html.includes('auth-form-col');
console.log(`Auth card modal structure: ${hasModal}`);
if (!hasModal) {
  console.error('FAIL: Auth card modal structure missing');
  process.exit(1);
}

// 2. Check Left Column Quote & Details
const hasQuote = html.includes('auth-quote-heading') && html.includes('auth-quote-desc') && html.includes('auth-trust-mark');
console.log(`Left visual side quote & trust mark: ${hasQuote}`);
if (!hasQuote) {
  console.error('FAIL: Left visual side content missing');
  process.exit(1);
}

// 3. Check Tabs (Sign In & New Athlete Registration)
const hasTabs = html.includes('auth-tabs-row') && html.includes('Sign In') && html.includes('New Athlete Registration');
console.log(`Auth tabs row: ${hasTabs}`);
if (!hasTabs) {
  console.error('FAIL: Auth tabs missing');
  process.exit(1);
}

// 4. Check Demo Environment Box
const hasDemoBox = html.includes('auth-demo-banner') && html.includes('Demo Environment:') && html.includes('one-click demo button');
console.log(`Demo environment callout box: ${hasDemoBox}`);
if (!hasDemoBox) {
  console.error('FAIL: Demo environment box missing');
  process.exit(1);
}

// 5. Check Form Fields & Actions
const hasEmailField = html.includes('signin-email') && html.includes('marcus.thorne@vortexhoops.com');
const hasPasswordField = html.includes('signin-password') && html.includes('password-toggle-eye');
const hasForgotLink = html.includes('auth-forgot-link') && html.includes('Forgot password?');
const hasRememberMe = html.includes('Remember me on this device');
const hasSignInBtn = html.includes('btn-auth-primary') && html.includes('Sign In to Dashboard');
const hasDemoBtn = html.includes('btn-auth-demo') && html.includes('One-Click Demo Sign In') && html.includes('dashboard.html');

console.log(`Email input with demo ID: ${hasEmailField}`);
console.log(`Password input with toggle eye: ${hasPasswordField}`);
console.log(`Forgot password link: ${hasForgotLink}`);
console.log(`Remember me checkbox: ${hasRememberMe}`);
console.log(`Sign In primary button: ${hasSignInBtn}`);
console.log(`One-Click Demo button linking to dashboard: ${hasDemoBtn}`);

if (!hasEmailField || !hasPasswordField || !hasForgotLink || !hasRememberMe || !hasSignInBtn || !hasDemoBtn) {
  console.error('FAIL: Required form fields and buttons do not match reference');
  process.exit(1);
}

// 6. Check Header Actions
const hasRtl = html.includes('rtl-toggle-btn');
const hasTheme = html.includes('theme-toggle-btn');
const hasHomeLink = html.includes('href="index.html"');
console.log(`Header RTL, Theme toggle, and Home link: ${hasRtl && hasTheme && hasHomeLink}`);
if (!hasRtl || !hasTheme || !hasHomeLink) {
  console.error('FAIL: Header action buttons missing');
  process.exit(1);
}

// 7. Check Zero inline styles
const inlineStyles = html.match(/style=\"[^\"]*\"/g) || [];
console.log(`Inline style attributes: ${inlineStyles.length} (Expected: 0)`);
if (inlineStyles.length > 0) {
  console.error('FAIL: Found inline style attributes:', inlineStyles);
  process.exit(1);
}

// 8. Check Zero inline scripts
const inlineScripts = (html.match(/<script(?![^>]*src=)[^>]*>[\s\S]*?<\/script>/gi) || []);
console.log(`Inline scripts in HTML: ${inlineScripts.length} (Expected: 0)`);
if (inlineScripts.length > 0) {
  console.error('FAIL: Found inline scripts in HTML');
  process.exit(1);
}

// 9. Check Zero emojis
const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu;
const emojis = html.match(emojiRegex) || [];
console.log(`Emojis found in HTML: ${emojis.length} (Expected: 0)`);
if (emojis.length > 0) {
  console.error('FAIL: Found emojis in HTML:', emojis);
  process.exit(1);
}

console.log('SUCCESS: All Login / Auth Portal criteria verified!');

