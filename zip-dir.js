const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('gpt-ua-chrome.zip');
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('Archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  console.error(err);
  system.exit(1);
});

archive.pipe(output);
archive.file('./manifest.json', { name: 'manifest.json' });
archive.file('./background.js', { name: './background.js' });
archive.directory('./_locales', '_locales');
archive.directory('./icons', 'icons');
archive.directory('./popup/', 'popup');
archive.finalize();
