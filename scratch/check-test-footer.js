const fs = require('fs');

const tests = fs.readdirSync('scratch').filter(f => f.startsWith('test-') && f.endsWith('.js'));
tests.forEach(t => {
  const content = fs.readFileSync('scratch/' + t, 'utf8');
  if (content.includes('footer')) {
    console.log('Test file references footer:', t);
    const lines = content.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('footer')) console.log(`  Line ${i + 1}: ${l.trim()}`);
    });
  }
});

