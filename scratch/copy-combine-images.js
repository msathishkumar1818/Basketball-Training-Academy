const fs = require('fs');

const copies = [
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\combine_forceplate_1794341433843.jpg',
    dest: 'assets/images/sections/combine-forceplate.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\combine_recovery_1794341454444.jpg',
    dest: 'assets/images/sections/combine-recovery.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\combine_vision_1794341475126.jpg',
    dest: 'assets/images/sections/combine-vision.jpg'
  }
];

copies.forEach(c => {
  fs.copyFileSync(c.src, c.dest);
  const size = fs.statSync(c.dest).size;
  console.log(`Copied to ${c.dest} (size: ${(size / 1024).toFixed(1)} KB)`);
});

