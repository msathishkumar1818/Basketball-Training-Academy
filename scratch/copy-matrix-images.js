const fs = require('fs');

const copies = [
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\dr_dish_rebounder_machine_1794341866864.jpg',
    dest: 'assets/images/sections/shooting-matrix-1.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\noah_shooting_arc_telemetry_1794341885147.jpg',
    dest: 'assets/images/sections/shooting-matrix-2.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\quick_release_catch_and_shoot_1794341906608.jpg',
    dest: 'assets/images/sections/shooting-matrix-3.jpg'
  },
  {
    src: 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\clutch_free_throw_spotlight_1794341928484.jpg',
    dest: 'assets/images/sections/shooting-matrix-4.jpg'
  }
];

copies.forEach(c => {
  fs.copyFileSync(c.src, c.dest);
  const size = fs.statSync(c.dest).size;
  console.log(`Copied to ${c.dest} (size: ${(size / 1024).toFixed(1)} KB)`);
});

