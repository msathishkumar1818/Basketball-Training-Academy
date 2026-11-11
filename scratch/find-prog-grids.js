const fs = require('fs');
const prog = fs.readFileSync('programs.html', 'utf8');
const grids = prog.match(/class="[^"]*grid[^"]*"/gi) || [];
console.log(grids);

