const fs = require('fs');

// 1. In assets/css/style.css, make .footer-social-row display: none by default
let styleCss = fs.readFileSync('assets/css/style.css', 'utf8');

const oldSocialCss = `.footer-social-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 0.25rem;
}`;

const newSocialCss = `.footer-social-row {
  display: none; /* Shown exclusively on 768px, 960px, 1032px viewports */
  align-items: center;
  gap: 0.65rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
}`;

if (styleCss.includes(oldSocialCss)) {
  styleCss = styleCss.replace(oldSocialCss, newSocialCss);
  fs.writeFileSync('assets/css/style.css', styleCss, 'utf8');
  console.log('style.css: set .footer-social-row display: none by default');
} else {
  console.log('style.css already updated or pattern not found');
}

// 2. In assets/css/responsive.css
let respCss = fs.readFileSync('assets/css/responsive.css', 'utf8');

// Ensure the 768px - 1032px rule exists with display: flex !important
const targetBlock = `/* Mid-range Laptops & Large Tablets in Landscape (1025px - 1032px) */
@media (max-width: 1032px) {`;

const newTabletBlock = `/* Mid-range Laptops & Large Tablets in Landscape (1025px - 1032px) */
@media (max-width: 1032px) {
  /* Footer 2x2 Balanced Model (Matching Reference Layout) */
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 3rem 2.5rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }

  .footer-social-row {
    display: flex !important;
  }`;

// Remove any duplicate if present
respCss = respCss.replace(/@media \(max-width: 1032px\) \{[\s\S]*?\.footer-brand-col \{[\s\S]*?span 1 !important;\s*\}/, `@media (max-width: 1032px) {
  /* Footer 2x2 Balanced Model (Matching Reference Layout) */
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 3rem 2.5rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }

  .footer-social-row {
    display: flex !important;
  }`);

// Under @media (max-width: 768px), make sure footer-grid stays 1fr 1fr and footer-social-row is flex
respCss = respCss.replace(/@media \(max-width: 768px\) \{[\s\S]*?\.footer-brand-col \{[\s\S]*?span 1 !important;\s*\}/, `@media (max-width: 768px) {
  /* Footer 768px Balanced 2x2 Grid (Matching Reference) */
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 2.5rem 2rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }

  .footer-social-row {
    display: flex !important;
  }`);

// Remove the accidental 1fr inside max-width: 768px around line 747
respCss = respCss.replace(
  `  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 2.25rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }`,
  `  /* Footer 1-column stack moved to max-width: 767px */`
);

// Add max-width: 767px block before max-width: 440px
if (!respCss.includes('@media (max-width: 767px)')) {
  const m440 = `@media (max-width: 440px) {`;
  const m767 = `/* Mobile Screens & Handheld Devices (Up to 767px) */
@media (max-width: 767px) {
  /* Hide footer social row on mobile (only 768px, 960px, 1032px have social) */
  .footer-social-row {
    display: none !important;
  }

  /* Single Column Footer Stack on Mobile */
  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 2.25rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }
}

`;
  respCss = respCss.replace(m440, m767 + m440);
}

fs.writeFileSync('assets/css/responsive.css', respCss, 'utf8');
console.log('responsive.css updated with exact 768/960/1032 social and 2x2 rules');

