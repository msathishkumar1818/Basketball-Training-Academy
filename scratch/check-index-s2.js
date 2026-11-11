const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const s2Match = index.match(/<section class="section-biomechanics[\s\S]*?<\/section>/);
console.log('=== S2 IN INDEX.HTML ===');
if (s2Match) {
  console.log(s2Match[0]);
} else {
  console.log('Not found');
}

