const fs = require('fs');

const copies = [
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\usa_basketball_gold_coach_1794365243669.jpg',
    dest: 'assets/images/sections/cred-usab.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\fiba_licensed_tactical_coach_1794365264079.jpg',
    dest: 'assets/images/sections/cred-fiba.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\nsca_strength_conditioning_coach_1794365290045.jpg',
    dest: 'assets/images/sections/cred-nsca.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\noah_shooting_data_analyst_1794365314015.jpg',
    dest: 'assets/images/sections/cred-noah.jpg'
  }
];

copies.forEach(c => {
  fs.copyFileSync(c.src, c.dest);
  const size = fs.statSync(c.dest).size;
  console.log(`Copied to ${c.dest} (size: ${(size / 1024).toFixed(1)} KB)`);
});

