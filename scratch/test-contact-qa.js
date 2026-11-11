const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'contact.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('--- CONTACT PAGE QA VERIFICATION ---');

// 1. Check sections count
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (!mainMatch) {
  console.error('FAIL: <main> element not found');
  process.exit(1);
}
const sections = mainMatch[1].match(/<section[\s\S]*?<\/section>/g) || [];
console.log(`Sections count in <main>: ${sections.length} (Expected: 5)`);
if (sections.length !== 5) {
  console.error(`FAIL: Expected exactly 5 sections, got ${sections.length}`);
  process.exit(1);
}

// 2. Check inner hero standardization
const hasInnerHero = sections[0].includes('inner-page-hero') && sections[0].includes('contact-hero-bg');
console.log(`Inner page hero standardized: ${hasInnerHero}`);
if (!hasInnerHero) {
  console.error('FAIL: Inner page hero not standardized');
  process.exit(1);
}

// 3. Check Section 2: 4 even contact channel cards
const channelCardsCount = (sections[1].match(/class=\"contact-channel-card\"/g) || []).length;
console.log(`Contact channel cards: ${channelCardsCount} (Expected: 4)`);
if (channelCardsCount !== 4) {
  console.error(`FAIL: Expected 4 channel cards, got ${channelCardsCount}`);
  process.exit(1);
}

// 4. Check Section 3: Assessment form
const hasForm = sections[2].includes('athlete-inquiry-form') && sections[2].includes('form-submit-btn');
console.log(`Assessment inquiry form: ${hasForm}`);
if (!hasForm) {
  console.error('FAIL: Assessment form section missing');
  process.exit(1);
}

// 5. Check Section 4: Google Live Map
const hasMap = sections[3].includes('map-iframe') && sections[3].includes('google.com/maps/embed');
console.log(`Google live map embed: ${hasMap}`);
if (!hasMap) {
  console.error('FAIL: Google live map embed missing');
  process.exit(1);
}

// 6. Check Section 5: Campus Visit CTA
const hasCta = sections[4].includes('section-contact-cta') && sections[4].includes('Tour Our 18,000 Sq Ft Biomechanics Campus');
console.log(`Campus visit CTA section: ${hasCta}`);
if (!hasCta) {
  console.error('FAIL: Campus visit CTA section missing');
  process.exit(1);
}

// 7. Check Desktop navigation (Exactly 6 items, Contact active)
const desktopNavMatch = html.match(/<nav class=\"desktop-nav\"[^>]*>([\s\S]*?)<\/nav>/);
if (desktopNavMatch) {
  const homeDropdown = desktopNavMatch[1].includes('homeDropdownWrap');
  const navLinks = desktopNavMatch[1].match(/<a [^>]*class=\"nav-link[^\"]*\"/g) || [];
  const totalNavItems = (homeDropdown ? 1 : 0) + navLinks.length;
  console.log(`Desktop nav items count: ${totalNavItems} (Expected: 6)`);
  const isContactActive = desktopNavMatch[1].includes('href="contact.html" class="nav-link active"');
  console.log(`Contact active link: ${isContactActive}`);
  if (totalNavItems !== 6 || !isContactActive) {
    console.error('FAIL: Nav items count or active link incorrect');
    process.exit(1);
  }
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

console.log('SUCCESS: All Phase 09 Contact criteria verified!');

