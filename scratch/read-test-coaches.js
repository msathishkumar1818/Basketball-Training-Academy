const fs = require('fs');
const testCoaches = fs.readFileSync('scratch/test-coaches-qa.js', 'utf8');
console.log(testCoaches);
