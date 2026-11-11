const fs = require('fs');

console.log('=== 1. CHECK HOME-2.HTML HERO ===');
const home2 = fs.readFileSync('home-2.html', 'utf8');
const hero2 = home2.match(/<section[\s\S]*?class="[^"]*hero[^"]*"[\s\S]*?<\/section>/);
if (hero2) {
  console.log(hero2[0].substring(0, 800));
}

console.log('\n=== 2. CHECK DASHBOARD.HTML HEADER & SIDEBAR ===');
const dash = fs.readFileSync('dashboard.html', 'utf8');
const dashHeader = dash.match(/<header[\s\S]*?<\/header>/);
if (dashHeader) console.log(dashHeader[0].substring(0, 400));
const dashSidebar = dash.match(/<aside[\s\S]*?<\/aside>/);
if (dashSidebar) console.log(dashSidebar[0].substring(0, 400));

console.log('\n=== 3. CHECK INDEX.HTML SECTION 2 & 3 ===');
const index = fs.readFileSync('index.html', 'utf8');
const s2 = index.match(/<section class="section-biomechanics[\s\S]*?<\/section>/);
if (s2) console.log('S2:', s2[0].substring(0, 400));
const s3 = index.match(/<section class="section-progression[\s\S]*?<\/section>/);
if (s3) console.log('S3:', s3[0].substring(0, 500));

