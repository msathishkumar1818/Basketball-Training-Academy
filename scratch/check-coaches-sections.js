const fs = require('fs');
const html = fs.readFileSync('coaches.html', 'utf8');

const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
if (mainMatch) {
  const sections = mainMatch[1].match(/<section[^>]*>[\s\S]*?<\/section>/g) || [];
  sections.forEach((s, idx) => {
    const classMatch = s.match(/class="([^"]+)"/);
    const headingMatch = s.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/);
    console.log(`Section ${idx+1}: class="${classMatch ? classMatch[1] : ''}"`);
    console.log(`  Heading: ${headingMatch ? headingMatch[1].replace(/<[^>]+>/g, '').trim() : ''}`);
  });
}

