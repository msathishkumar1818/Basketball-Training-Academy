const fs = require('fs');

['home-2.html', 'programs.html', 'coaches.html', 'about.html'].forEach(file => {
  console.log(`\n===== ${file} =====`);
  const content = fs.readFileSync(file, 'utf8');
  const regex = /<p([^>]*)>([\s\S]*?)<\/p>/g;
  let m;
  let idx = 0;
  while ((m = regex.exec(content))) {
    idx++;
    const text = m[2].trim();
    if (text.length > 30 && !text.includes('<ul') && !text.includes('<div') && !text.includes('©')) {
      console.log(`P${idx} (${m[1]}):`);
      console.log(text);
    }
  }
});

