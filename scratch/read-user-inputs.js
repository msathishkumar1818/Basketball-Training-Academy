const fs = require('fs');

const transcript = fs.readFileSync('C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\.system_generated\\logs\\transcript.jsonl', 'utf8');

const lines = transcript.split('\n');
lines.forEach(l => {
  if (!l.trim()) return;
  try {
    const data = JSON.parse(l);
    if (data.type === 'USER_INPUT') {
      console.log('--- USER_INPUT ---');
      console.log(data.content);
      if (data.media) {
        console.log('Media:', data.media.map(m => m.uri));
      }
    }
  } catch (e) {}
});

