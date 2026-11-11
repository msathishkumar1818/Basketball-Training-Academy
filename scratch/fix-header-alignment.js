const fs = require('fs');

let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// 1. Add header rules to @media (max-width: 1280px)
const r1280Target = `@media (max-width: 1280px) {`;
const r1280Add = `@media (max-width: 1280px) {
  /* Header Compact Spacing for Standard Desktops & Laptops (1025px - 1280px) */
  .header-container {
    padding: 0 1rem;
    gap: 0.75rem;
  }

  .brand-link {
    gap: 0.5rem;
  }

  .brand-logo-img {
    width: 34px;
    height: 34px;
  }

  .brand-title {
    font-size: 1.08rem;
  }

  .brand-tagline {
    font-size: 0.58rem;
  }

  .desktop-nav {
    gap: 0.2rem;
  }

  .nav-link {
    padding: 0.45rem 0.65rem;
    font-size: 0.82rem;
    letter-spacing: 0.03em;
  }

  .header-actions {
    gap: 0.5rem;
  }

  .icon-control-btn {
    width: 34px;
    height: 34px;
  }

  .header-login-btn {
    height: 34px;
    padding: 0 0.85rem;
    font-size: 0.82rem;
    gap: 0.35rem;
  }
`;

if (resp.includes(r1280Target) && !resp.includes('/* Header Compact Spacing for Standard Desktops')) {
  resp = resp.replace(r1280Target, r1280Add);
  console.log('Added 1280px header rules');
}

// 2. Add header fluid rules to @media (max-width: 1032px)
const r1032Target = `@media (max-width: 1032px) {`;
const r1032Add = `@media (max-width: 1032px) {
  /* Header Fluid Alignment for 1032px Viewport - Prevents Any Right Edge Overflow */
  .header-container {
    padding: 0 0.75rem !important;
    gap: 0.45rem !important;
  }

  .brand-link {
    gap: 0.4rem !important;
    flex-shrink: 0 !important;
  }

  .brand-logo-img {
    width: 30px !important;
    height: 30px !important;
  }

  .brand-title {
    font-size: 0.95rem !important;
    letter-spacing: 0.03em !important;
  }

  .brand-tagline {
    font-size: 0.52rem !important;
    letter-spacing: 0.08em !important;
  }

  .desktop-nav {
    gap: 0.12rem !important;
    flex-shrink: 1 !important;
  }

  .nav-link {
    padding: 0.35rem 0.48rem !important;
    font-size: 0.76rem !important;
    letter-spacing: 0.02em !important;
    white-space: nowrap !important;
  }

  .header-actions {
    gap: 0.35rem !important;
    flex-shrink: 0 !important;
  }

  .icon-control-btn {
    width: 32px !important;
    height: 32px !important;
    flex-shrink: 0 !important;
  }

  .header-login-btn {
    height: 32px !important;
    padding: 0 0.7rem !important;
    font-size: 0.76rem !important;
    gap: 0.3rem !important;
    flex-shrink: 0 !important;
    white-space: nowrap !important;
  }
`;

if (resp.includes(r1032Target) && !resp.includes('/* Header Fluid Alignment for 1032px Viewport')) {
  resp = resp.replace(r1032Target, r1032Add);
  console.log('Added 1032px header rules');
}

fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');

