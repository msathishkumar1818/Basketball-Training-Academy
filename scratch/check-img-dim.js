const fs = require('fs');

function getJpegDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

const list = [
  'assets/images/hero/hero-home1.jpg',
  'assets/images/hero/hero-home2.jpg',
  'assets/images/backgrounds/cta-combine-dark.jpg',
  'assets/images/sections/court-facility.jpg',
  'assets/images/sections/shooting-protocol.jpg',
  'assets/images/sections/combine-telemetry.jpg'
];

list.forEach(f => {
  try {
    console.log(f, getJpegDimensions(f));
  } catch (e) {
    console.log(f, e.message);
  }
});

