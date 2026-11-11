const fs = require('fs');

const replacementCss = `/* --------------------------------------------------------------------------
   SECTION 4 (COACHES): CERTIFIED ACCREDITATION PHOTO GRID MODEL
   -------------------------------------------------------------------------- */
.section-credentials-bar {
  padding: 6rem 0;
  background-color: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
}

.credentials-photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  align-items: stretch;
}

.cred-photo-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: border-color var(--duration-fast) var(--ease-smooth),
              transform var(--duration-fast) var(--ease-smooth),
              box-shadow var(--duration-fast) var(--ease-smooth);
}

.cred-photo-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

.cred-card-media {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.cred-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.cred-photo-card:hover .cred-card-media img {
  transform: scale(1.06);
}

.cred-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.5) 100%);
  pointer-events: none;
}

.cred-card-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}

[dir="rtl"] .cred-card-badge {
  right: auto;
  left: 1rem;
}

.cred-status-pill {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  background-color: rgba(0, 229, 153, 0.15);
  border: 1px solid rgba(0, 229, 153, 0.35);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
}

.cred-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.cred-org-tag {
  font-family: 'Oswald', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.4rem;
}

.cred-card-title {
  font-family: 'Oswald', sans-serif;
  font-size: 1.22rem;
  font-weight: 700;
  color: var(--text-bright);
  margin-bottom: 0.45rem;
  line-height: 1.2;
}

.cred-card-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 1.25rem;
  flex: 1;
}

.cred-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-subtle);
}

.cred-verify-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--color-accent);
}

.cred-verify-badge svg {
  color: var(--color-accent);
}

.credentials-trust-bar {
  display: flex;
  justify-content: center;
  margin-top: 2.75rem;
}

.credentials-trust-seal {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.5rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-left: 3px solid var(--color-primary);
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

[dir="rtl"] .credentials-trust-seal {
  border-left: 1px solid var(--border-subtle);
  border-right: 3px solid var(--color-primary);
}

.seal-badge-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 85, 0, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
}

.seal-text-group {
  display: flex;
  flex-direction: column;
}

.seal-title {
  font-family: 'Oswald', sans-serif;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-bright);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.seal-desc {
  font-size: 0.74rem;
  color: var(--text-soft);
  font-weight: 600;
}`;

let css = fs.readFileSync('assets/css/style.css', 'utf8');
const start = css.indexOf('.section-credentials-bar {');
const end = css.indexOf('.section-coaches-cta {');

if (start !== -1 && end !== -1) {
  css = css.substring(0, start) + replacementCss + '\n\n/* --------------------------------------------------------------------------\n   SECTION 5 (COACHES): PRIVATE CONSULTATION CTA (MANDATORY FINAL SECTION)\n   -------------------------------------------------------------------------- */\n' + css.substring(end);
  fs.writeFileSync('assets/css/style.css', css, 'utf8');
  console.log('Successfully updated style.css for credentials section!');
} else {
  console.error('Could not find start or end index:', start, end);
}

