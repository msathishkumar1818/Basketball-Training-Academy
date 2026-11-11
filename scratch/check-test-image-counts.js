const fs = require('fs');

const testFiles = fs.readdirSync('scratch').filter(f => f.startsWith('test-') && f.endsWith('.js'));
testFiles.forEach(tf => {
  const content = fs.readFileSync('scratch/' + tf, 'utf8');
  if (content.includes('home-2') || content.includes('imgSrcs') || content.includes('Total image sources')) {
    console.log(`=== ${tf} ===`);
    const lines = content.split('\n');
    lines.forEach((l, idx) => {
      if (l.includes('image') || l.includes('Image') || l.includes('img')) {
        console.log(`  Line ${idx+1}: ${l.trim()}`);
      }
    });
  }
});

