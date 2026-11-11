const fs = require('fs');

// 1. Update assets/css/style.css
let css = fs.readFileSync('assets/css/style.css', 'utf8');

// A. Telemetry label contrast
css = css.replace(
  `.telemetry-lbl {
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-soft);
  margin-top: 0.25rem;
}`,
  `.telemetry-lbl {
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #E2E8F0;
  margin-top: 0.25rem;
}`
);

// B. Inner hero subtext & meta bar
const heroTarget = `.inner-hero-desc {
  font-size: 1.08rem;
  color: #F1F5F9;
  line-height: 1.6;
  max-width: 640px;
  font-weight: 500;
}`;

const heroReplacement = `.inner-hero-desc,
.inner-hero-subtext {
  font-size: 1.08rem;
  color: #F1F5F9;
  line-height: 1.6;
  max-width: 640px;
  font-weight: 500;
}

.inner-hero-meta-bar {
  display: inline-flex;
  align-items: center;
  gap: 1.25rem;
  background-color: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.65rem 1.25rem;
  border-radius: 9999px;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
}

.meta-label {
  color: #94A3B8;
  font-weight: 500;
}

.meta-value {
  color: #FFFFFF;
  font-weight: 700;
}

.meta-divider {
  width: 1px;
  height: 14px;
  background-color: rgba(255, 255, 255, 0.25);
}`;

css = css.replace(heroTarget, heroReplacement);

// C. Contact CTA styling & trust strip
const ctaTarget = `.section-contact-cta {
  position: relative;
  padding: 7rem 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-contact-dark.jpg');
  background-size: cover;
  background-position: center;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
  overflow: hidden;
}`;

const ctaReplacement = `.section-contact-cta {
  position: relative;
  padding: 7rem 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.95) 100%),
    url('../images/backgrounds/cta-contact-dark.jpg');
  background-size: cover;
  background-position: center;
  border-top: 1px solid var(--border-subtle);
  text-align: center;
  overflow: hidden;
}

.section-contact-cta .cta-inner-box,
.section-contact-cta .cta-box-inner {
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-contact-cta .cta-heading-white,
.section-contact-cta .cta-main-title {
  font-family: 'Oswald', sans-serif;
  font-size: clamp(2.4rem, 4.6vw, 4rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.02em;
  color: #FFFFFF !important;
  text-transform: uppercase;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.section-contact-cta .cta-heading-white span,
.section-contact-cta .cta-main-title span {
  color: var(--color-primary);
}

.section-contact-cta .cta-description {
  font-size: 1.12rem;
  color: #E2E8F0 !important;
  line-height: 1.6;
  max-width: 620px;
  margin: 0 auto 2.5rem auto;
}

.cta-trust-strip {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2rem;
  font-size: 0.84rem;
  color: #CBD5E1 !important;
  font-weight: 500;
}

.cta-trust-strip svg {
  color: var(--color-accent);
  flex-shrink: 0;
}`;

css = css.replace(ctaTarget, ctaReplacement);

fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('style.css updated successfully.');

// 2. Update contact.html
let contact = fs.readFileSync('contact.html', 'utf8');

// Update Hero subtext class
contact = contact.replace(
  '<p class="inner-hero-subtext">',
  '<p class="inner-hero-desc inner-hero-subtext">'
);

// Update CTA section to standard markup while keeping exact required title
const oldCtaSection = `    <section class="section-contact-cta" aria-label="Schedule Campus Walkthrough">
      <div class="site-container">
        <div class="cta-inner-box">
          <span class="hero-badge-pill">On-Site Experience</span>
          <h2 class="section-heading-lg cta-heading-white">
            Tour Our 18,000 Sq Ft Biomechanics Campus
          </h2>
          <p class="cta-description">
            Inspect our hardwood courts and digital sensor suites before reserving your training block.
          </p>

          <div class="cta-actions-group">
            <a href="#assessment-form" class="btn-primary-court">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Campus Walkthrough</span>
            </a>
            <a href="tel:+18005554667" class="btn-secondary-court">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Speak With Admissions</span>
            </a>
          </div>

          <div class="cta-trust-strip">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Complimentary 30-Minute Biomechanical Consultation Included with All Campus Tours</span>
          </div>

        </div>
      </div>
    </section>`;

const newCtaSection = `    <section class="section-contact-cta" aria-label="Schedule Campus Walkthrough">
      <div class="site-container">
        <div class="cta-box-inner">
          <div class="cta-live-indicator">
            <span class="cta-live-dot" aria-hidden="true"></span>
            <span>On-Site Experience &bull; Campus Walkthrough</span>
          </div>
          <h2 class="cta-main-title cta-heading-white">
            Tour Our 18,000 Sq Ft Biomechanics Campus
          </h2>
          <p class="cta-description">
            Inspect our hardwood courts and digital sensor suites before reserving your training block.
          </p>

          <div class="cta-actions-group">
            <a href="#assessment-form" class="btn-primary-court">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Schedule Campus Walkthrough</span>
            </a>
            <a href="tel:+18005554667" class="btn-secondary-court">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Speak With Admissions</span>
            </a>
          </div>

          <div class="cta-trust-strip">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Complimentary 30-Minute Biomechanical Consultation Included with All Campus Tours</span>
          </div>

        </div>
      </div>
    </section>`;

if (contact.includes(oldCtaSection)) {
  contact = contact.replace(oldCtaSection, newCtaSection);
  fs.writeFileSync('contact.html', contact, 'utf8');
  console.log('contact.html CTA section updated successfully.');
} else {
  console.log('WARNING: oldCtaSection not matched exactly in contact.html, searching line-by-line');
}

