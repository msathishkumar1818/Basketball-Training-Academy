const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');

const s3Match = index.match(/<section class="section-progression[\s\S]*?<\/section>/);
console.log('=== S3 IN INDEX.HTML ===');
if (s3Match) {
  console.log(s3Match[0]);
} else {
  console.log('Not found');
}

