const fs = require('fs');

let resp = fs.readFileSync('assets/css/responsive.css', 'utf8');

// Replace lines 238-251
const oldBlock1 = `  .credentials-split-wrap {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .credentials-lead-col {
    text-align: center;
    align-items: center;
  }

  .credentials-trust-seal {
    max-width: 100%;
    justify-content: center;
  }`;

const newBlock1 = `  .credentials-photo-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }`;

resp = resp.replace(oldBlock1, newBlock1);

// Replace .cred-ledger-item block
const oldBlock2 = `  .cred-ledger-item {
    padding: 1rem 1.15rem;
    gap: 1rem;
  }`;

const newBlock2 = `  .credentials-photo-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }`;

resp = resp.replace(oldBlock2, newBlock2);

fs.writeFileSync('assets/css/responsive.css', resp, 'utf8');
console.log('Successfully updated responsive.css!');

