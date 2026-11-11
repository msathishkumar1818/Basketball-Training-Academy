const fs = require('fs');

const replacementHtml = `<section class="section-credentials-bar" aria-label="Coaching Accreditations and Certifications">
      <div class="site-container">
        
        <!-- Centered Section Header -->
        <div class="section-header-center">
          <span class="section-eyebrow">Industry Credentials</span>
          <h2 class="section-heading-lg">Certified Accreditation Standard</h2>
          <p class="section-subtext">
            Every Vortex coach holds verified active credentials from world-governing basketball authorities, ensuring complete compliance with NCAA, FIBA, and elite combine protocols.
          </p>
        </div>

        <!-- 4 Symmetrical Credential Photo Cards Grid -->
        <div class="credentials-photo-grid">
          
          <!-- Card 1: USA Basketball Gold -->
          <article class="cred-photo-card">
            <div class="cred-card-media">
              <img src="assets/images/sections/cred-usab.jpg" alt="USA Basketball Gold licensed coach demonstrating fundamentals" width="600" height="420" loading="lazy">
              <div class="cred-card-overlay" aria-hidden="true"></div>
            </div>
            <div class="cred-card-badge">
              <span class="cred-status-pill">Active</span>
            </div>
            <div class="cred-card-body">
              <span class="cred-org-tag">USAB &bull; Gold Licensed</span>
              <h3 class="cred-card-title">USA Basketball Gold</h3>
              <p class="cred-card-desc">Licensed youth, collegiate &amp; pro athlete development standards.</p>
              <div class="cred-card-footer">
                <span class="cred-verify-badge">
                  <svg fill="currentColor" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>100% NCAA Compliant</span>
                </span>
              </div>
            </div>
          </article>

          <!-- Card 2: FIBA Licensed -->
          <article class="cred-photo-card">
            <div class="cred-card-media">
              <img src="assets/images/sections/cred-fiba.jpg" alt="FIBA licensed coach drawing tactical set plays during huddle" width="600" height="420" loading="lazy">
              <div class="cred-card-overlay" aria-hidden="true"></div>
            </div>
            <div class="cred-card-badge">
              <span class="cred-status-pill">Active</span>
            </div>
            <div class="cred-card-body">
              <span class="cred-org-tag">FIBA &bull; Global Cadre</span>
              <h3 class="cred-card-title">FIBA Licensed</h3>
              <p class="cred-card-desc">International basketball tactical design &amp; tournament accreditation.</p>
              <div class="cred-card-footer">
                <span class="cred-verify-badge">
                  <svg fill="currentColor" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>Global Tactics Verified</span>
                </span>
              </div>
            </div>
          </article>

          <!-- Card 3: NSCA CSCS -->
          <article class="cred-photo-card">
            <div class="cred-card-media">
              <img src="assets/images/sections/cred-nsca.jpg" alt="NSCA CSCS coach analyzing jump power and deceleration on force plates" width="600" height="420" loading="lazy">
              <div class="cred-card-overlay" aria-hidden="true"></div>
            </div>
            <div class="cred-card-badge">
              <span class="cred-status-pill">Active</span>
            </div>
            <div class="cred-card-body">
              <span class="cred-org-tag">NSCA &bull; CSCS Certified</span>
              <h3 class="cred-card-title">NSCA &bull; CSCS</h3>
              <p class="cred-card-desc">Certified strength &amp; conditioning specialists for high-performance deceleration.</p>
              <div class="cred-card-footer">
                <span class="cred-verify-badge">
                  <svg fill="currentColor" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>Kinetic Force Master</span>
                </span>
              </div>
            </div>
          </article>

          <!-- Card 4: Noah Certified -->
          <article class="cred-photo-card">
            <div class="cred-card-media">
              <img src="assets/images/sections/cred-noah.jpg" alt="Noah certified analyst reviewing shooting arc trajectory data courtside" width="600" height="420" loading="lazy">
              <div class="cred-card-overlay" aria-hidden="true"></div>
            </div>
            <div class="cred-card-badge">
              <span class="cred-status-pill">Active</span>
            </div>
            <div class="cred-card-body">
              <span class="cred-org-tag">Noah &bull; Sensor Lab</span>
              <h3 class="cred-card-title">Noah Certified</h3>
              <p class="cred-card-desc">Kinematic shooting data analysts &amp; 45.2&deg; arc calibration specialists.</p>
              <div class="cred-card-footer">
                <span class="cred-verify-badge">
                  <svg fill="currentColor" viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  <span>Sensor Telemetry Lead</span>
                </span>
              </div>
            </div>
          </article>

        </div>

        <!-- Trust Verification Bar -->
        <div class="credentials-trust-bar">
          <div class="credentials-trust-seal">
            <div class="seal-badge-icon" aria-hidden="true">
              <svg fill="currentColor" viewBox="0 0 20 20" width="20" height="20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="seal-text-group">
              <span class="seal-title">100% Verified Coaching Cadre</span>
              <span class="seal-desc">NCAA &bull; USAB &bull; FIBA Compliance Active</span>
            </div>
          </div>
        </div>

      </div>
    </section>`;

let html = fs.readFileSync('coaches.html', 'utf8');
const start = html.indexOf('<section class="section-credentials-bar"');
const end = html.indexOf('</section>', start) + 10;

html = html.substring(0, start) + replacementHtml + html.substring(end);
fs.writeFileSync('coaches.html', html, 'utf8');
console.log('Successfully updated coaches.html section 4!');

