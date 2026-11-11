const fs = require('fs');
const path = require('path');

const uploadDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\bcb07cf3-436d-4bf8-bd6a-cdf581230638\\.user_uploaded';
const files = fs.readdirSync(uploadDir);

function getJpegDimensions(buf) {
  let offset = 2;
  while (offset < buf.length) {
    if (buf[offset] !== 0xFF) break;
    const marker = buf[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buf.readUInt16BE(offset + 5);
      const width = buf.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buf.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

files.forEach(f => {
  const p = path.join(uploadDir, f);
  const buf = fs.readFileSync(p);
  console.log(f, `${(buf.length/1024).toFixed(1)} KB`);
});

