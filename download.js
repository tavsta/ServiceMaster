
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream('download.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } 
});

output.on('close', () => {
  console.log('Archive created successfully!');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add all files except node_modules and .git
archive.glob('**/*', {
  ignore: ['node_modules/**', '.git/**', 'download.zip', 'download.js']
});

archive.finalize();
