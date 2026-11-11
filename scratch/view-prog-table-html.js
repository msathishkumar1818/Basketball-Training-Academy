const fs = require('fs');
const prog = fs.readFileSync('programs.html', 'utf8');

const tIdx = prog.indexOf('<table');
console.log(prog.substring(tIdx - 400, tIdx + 1200));

