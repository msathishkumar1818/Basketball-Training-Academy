const fs = require('fs');

const newFooterHtml = `  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand-col">
          <a href="index.html" class="brand-link" aria-label="Vortex Basketball Academy">
            <img src="assets/images/icons/logo.svg" alt="Vortex Logo" class="brand-logo-img" width="36" height="36">
            <div class="brand-text-group">
              <span class="brand-title">VORTEX <span>HOOPS</span></span>
              <span class="brand-tagline">TRAINING ACADEMY</span>
            </div>
          </a>
          <p class="footer-desc">
            Premier basketball institute cultivating elite players through biomechanics and mentorship.
          </p>

          <!-- Social Media Channels (Matching Reference Model) -->
          <div class="footer-social-row" aria-label="Social Media Channels">
            <a href="https://instagram.com" class="footer-social-pill" aria-label="Instagram" target="_blank" rel="noopener">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke-width="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="https://facebook.com" class="footer-social-pill" aria-label="Facebook" target="_blank" rel="noopener">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://youtube.com" class="footer-social-pill" aria-label="YouTube" target="_blank" rel="noopener">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://wa.me/18005554667" class="footer-social-pill" aria-label="WhatsApp" target="_blank" rel="noopener">
              <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path d="M12.031 0C5.397 0 0 5.398 0 12.034c0 2.12.553 4.19 1.603 6.01L.069 24l6.126-1.606a12.008 12.008 0 005.836 1.505h.005c6.632 0 12.03-5.398 12.03-12.035 0-3.217-1.252-6.24-3.528-8.517A11.97 11.97 0 0012.031 0zm0 22.029h-.004a10.02 10.02 0 01-5.11-1.397l-.367-.218-3.799.996 1.014-3.704-.239-.38a9.987 9.987 0 01-1.532-5.292c0-5.529 4.498-10.028 10.034-10.028 2.68 0 5.197 1.044 7.09 2.939a9.96 9.96 0 012.933 7.095c0 5.53-4.5 10.029-10.035 10.029z"/>
              </svg>
            </a>
          </div>

          <div class="footer-badges">
            <span class="footer-badge-pill">
              <svg fill="currentColor" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              USAB Certified
            </span>
            <span class="footer-badge-pill">
              <svg fill="currentColor" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
              FIBA Accredited
            </span>
          </div>
        </div>

        <!-- Quick Links: Academy Column -->
        <div>
          <h3 class="footer-heading">Academy</h3>
          <ul class="footer-link-list">
            <li><a href="about.html">About The Academy</a></li>
            <li><a href="coaches.html">Master Coaches</a></li>
            <li><a href="dashboard.html">Player Dashboard</a></li>
            <li><a href="contact.html">Facility Location</a></li>
            <li><a href="login.html">Player Login Portal</a></li>
          </ul>
        </div>

        <!-- Training Programs Column -->
        <div>
          <h3 class="footer-heading">Programs</h3>
          <ul class="footer-link-list">
            <li><a href="programs.html">Elite Skills Lab</a></li>
            <li><a href="programs.html">Shooting Mechanics</a></li>
            <li><a href="programs.html">Youth Fundamentals</a></li>
            <li><a href="programs.html">Strength &amp; Speed</a></li>
            <li><a href="programs.html">College Combine Prep</a></li>
          </ul>
        </div>

        <!-- Schedule & Court Hours -->
        <div>
          <h3 class="footer-heading">Facility Hours</h3>
          <div class="footer-schedule-box">
            <div class="schedule-row">
              <span>Mon – Fri:</span>
              <span class="schedule-highlight">06:00 AM – 10:00 PM</span>
            </div>
            <div class="schedule-row">
              <span>Saturday:</span>
              <span class="schedule-highlight">07:00 AM – 09:00 PM</span>
            </div>
            <div class="schedule-row">
              <span>Sunday:</span>
              <span class="schedule-highlight">08:00 AM – 06:00 PM</span>
            </div>
            <div class="schedule-row">
              <span>Private Booking:</span>
              <span class="schedule-highlight">By Reservation</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom Bar -->
      <div class="footer-bottom-bar">
        <p>&copy; 2026 Vortex Basketball Academy. All rights reserved. Built for athletic excellence.</p>
        <p>Court Pro Coaching System &bull; Direct Player Portal</p>
      </div>
    </div>
  </footer>`;

// Replace in all 6 public pages
const pages = ['index.html', 'home-2.html', 'about.html', 'programs.html', 'coaches.html', 'contact.html'];

pages.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  const fStart = content.indexOf('<footer');
  const fEnd = content.indexOf('</footer>') + 9;
  if (fStart !== -1 && fEnd !== -1) {
    content = content.substring(0, fStart) + newFooterHtml.trim() + content.substring(fEnd);
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated footer in ${p}`);
  } else {
    console.error(`ERROR: Footer not found in ${p}`);
  }
});

// Update style.css to add social pill styling
let css = fs.readFileSync('assets/css/style.css', 'utf8');

const socialCss = `
.footer-social-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: 0.25rem;
}

.footer-social-pill {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.footer-social-pill:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 85, 0, 0.35);
}
`;

if (!css.includes('.footer-social-pill')) {
  css = css.replace('.footer-badges {', socialCss + '\n.footer-badges {');
  fs.writeFileSync('assets/css/style.css', css, 'utf8');
  console.log('Added footer-social-pill styles to style.css');
}

// Update responsive.css to enforce 2x2 grid on 1032px, 960px, 768px matching reference
let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// Under @media (max-width: 1032px)
const r1032Target = `@media (max-width: 1032px) {`;
const r1032Replace = `@media (max-width: 1032px) {
  /* Footer 2x2 Balanced Model (Matching Reference Layout) */
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 3rem 2.5rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }`;

if (resp.includes(r1032Target)) {
  resp = resp.replace(r1032Target, r1032Replace);
}

// Under @media (max-width: 1024px)
resp = resp.replace(
  `  /* Footer Tablet Stack */
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .footer-brand-col {
    grid-column: span 2;
  }`,
  `  /* Footer Tablet Stack (2x2 Balanced Model matching Reference) */
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 2.75rem 2.25rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }`
);

// Under @media (max-width: 768px)
const r768Target = `@media (max-width: 768px) {`;
const r768Replace = `@media (max-width: 768px) {
  /* Footer 768px Balanced 2x2 Grid (Matching Reference) */
  .footer-grid {
    grid-template-columns: 1fr 1fr !important;
    gap: 2.5rem 2rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }`;

if (resp.includes(r768Target)) {
  resp = resp.replace(r768Target, r768Replace);
}

// Under mobile screens <= 640px / 600px stack to 1 column
resp = resp.replace(
  `  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand-col {
    grid-column: span 1;
  }`,
  `  .footer-grid {
    grid-template-columns: 1fr !important;
    gap: 2.25rem !important;
  }

  .footer-brand-col {
    grid-column: span 1 !important;
  }`
);

fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');
console.log('responsive.css updated successfully.');

