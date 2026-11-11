const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

// 1. Home 2 CTA (.section-combine-cta) - the exact section user screenshotted
css = css.replace(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/p13.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/p13.jpg')`
);

// 2. Home 1 CTA (.section-court-cta)
css = css.replace(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.94) 100%),
    url('../images/backgrounds/p10.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/p10.jpg')`
);

// 3. About CTA (.section-about-cta)
css = css.replace(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-about-dark.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/cta-about-dark.jpg')`
);

// 4. Coaches CTA (.section-coaches-cta)
css = css.replace(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-coaches-dark.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/cta-coaches-dark.jpg')`
);

// 5. Programs CTA (.section-programs-cta)
css = css.replace(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-programs-dark.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/cta-programs-dark.jpg')`
);

// 6. Contact CTA (.section-contact-cta)
css = css.replace(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-contact-dark.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/cta-contact-dark.jpg')`
);

// 7. Dashboard CTA (.section-dashboard-cta - all occurrences)
css = css.replaceAll(
  `linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-dashboard-dark.jpg')`,
  `linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.68) 100%),
    url('../images/backgrounds/cta-dashboard-dark.jpg')`
);

// 8. Inner Hero Overlay (.inner-hero-overlay)
css = css.replace(
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.92) 100%);`,
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.66) 100%);`
);

// 9. Home 2 Hero Overlay (.hero-home2-overlay)
css = css.replace(
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.82) 100%);`,
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.65) 100%);`
);

// 10. Photo Card Overlay (.photo-card-overlay)
css = css.replace(
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.88) 85%, rgba(0, 0, 0, 0.95) 100%);`,
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.65) 85%, rgba(0, 0, 0, 0.78) 100%);`
);

// 11. Mosaic Card Overlay (.mosaic-card-overlay)
css = css.replace(
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.15) 35%, rgba(0, 0, 0, 0.88) 85%, rgba(0, 0, 0, 0.96) 100%);`,
  `background: linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.08) 35%, rgba(0, 0, 0, 0.65) 85%, rgba(0, 0, 0, 0.78) 100%);`
);

// 12. Add text-shadow and high-contrast definitions to CTA headings, descriptions, and guarantee notes
const oldCtaMainTitle = `.cta-main-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.4rem, 4.6vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}`;

const newCtaMainTitle = `.cta-main-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.4rem, 4.6vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #FFFFFF !important;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.85);
}`;

if (css.includes(oldCtaMainTitle)) {
  css = css.replace(oldCtaMainTitle, newCtaMainTitle);
}

const oldCtaDesc = `.cta-description {
  font-size: 1.12rem;
  color: #E2E8F0;
  line-height: 1.6;
  max-width: 620px;
  margin-bottom: 2.5rem;
}`;

const newCtaDesc = `.cta-description {
  font-size: 1.12rem;
  color: #F8FAFC !important;
  line-height: 1.6;
  max-width: 620px;
  margin-bottom: 2.5rem;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
}`;

if (css.includes(oldCtaDesc)) {
  css = css.replace(oldCtaDesc, newCtaDesc);
}

const oldCtaNote = `.cta-guarantee-note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--text-soft);
}`;

const newCtaNote = `.cta-guarantee-note {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.86rem;
  color: #E2E8F0 !important;
  font-weight: 600;
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.9);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
}`;

if (css.includes(oldCtaNote)) {
  css = css.replace(oldCtaNote, newCtaNote);
}

// Inner Hero titles and text with text-shadow
const oldInnerHeroTitle = `.inner-hero-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.4rem, 4.6vw, 3.8rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 1rem;
}`;

const newInnerHeroTitle = `.inner-hero-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.4rem, 4.6vw, 3.8rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-shadow: 0 3px 14px rgba(0, 0, 0, 0.85);
}`;

if (css.includes(oldInnerHeroTitle)) {
  css = css.replace(oldInnerHeroTitle, newInnerHeroTitle);
}

const oldInnerHeroDesc = `.inner-hero-desc,
.inner-hero-subtext {
  font-size: 1.08rem;
  color: #F1F5F9;
  line-height: 1.6;
  max-width: 640px;
  font-weight: 500;
}`;

const newInnerHeroDesc = `.inner-hero-desc,
.inner-hero-subtext {
  font-size: 1.08rem;
  color: #F8FAFC;
  line-height: 1.6;
  max-width: 640px;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.85);
}`;

if (css.includes(oldInnerHeroDesc)) {
  css = css.replace(oldInnerHeroDesc, newInnerHeroDesc);
}

fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('style.css updated with high-visibility background images and ultra-clear text!');

