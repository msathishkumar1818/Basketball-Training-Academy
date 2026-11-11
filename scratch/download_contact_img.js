const https = require('https');
const fs = require('fs');

const candidates = [
  'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1920&q=80'
];

async function tryDownload(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            console.log('Saved to', dest, 'size:', fs.statSync(dest).size);
            resolve(true);
          });
        });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        tryDownload(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        resolve(false);
      }
    }).on('error', (err) => resolve(false));
  });
}

(async () => {
  for (const url of candidates) {
    console.log('Trying:', url);
    const ok = await tryDownload(url, 'assets/images/backgrounds/cta-contact-dark.jpg');
    if (ok) {
      console.log('SUCCESS with', url);
      break;
    }
  }
})();

