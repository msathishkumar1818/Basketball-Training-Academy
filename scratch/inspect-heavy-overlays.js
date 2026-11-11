const fs = require('fs');
const css = fs.readFileSync('assets/css/style.css', 'utf8');
const lines = css.split('\n');

const inspect = (start, end, label) => {
  console.log(`--- ${label} (lines ${start}-${end}) ---`);
  lines.slice(start - 1, end).forEach((l, i) => console.log(i + start, l));
};

inspect(1910, 1925, 'photo-card-overlay');
inspect(2105, 2120, 'mosaic-card-overlay');
inspect(2255, 2270, 'line 2255-2270');
inspect(4360, 4375, 'line 4360-4375');

