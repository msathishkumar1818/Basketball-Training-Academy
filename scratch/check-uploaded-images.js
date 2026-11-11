const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\.user_uploaded';
const files = fs.readdirSync(uploadDir);
console.log('User uploaded files:');
files.forEach(f => {
  const stat = fs.statSync(path.join(uploadDir, f));
  console.log(f, stat.size);
});

