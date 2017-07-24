var fs = require('fs');
var archiver = require('archiver');


// constants
var SRC_DIR = __dirname + '/../';
var OUTPUT_DIR = __dirname + '/../assets/archives/';
var FILENAME = 'dpd-monitor-' + getFormattedDate() + '.zip';


createPackage();


// methods definitions
function createPackage() {
  if (!hasMinifiedJS()) {
    throw new Error(
      'No minified JavaScript files were found in the "www" directory. ' +
      'Make sure that you run the "webpack" command in the Terminal ' +
      'before attempting to package the project.'
    );
  }

  // create a file to stream archive data to.
  var output = fs.createWriteStream(OUTPUT_DIR + FILENAME);
  var archive = archiver('zip', {
    zlib: { level: 9 } // sets compression level
  });

  output.on('close', onDataWritten);
  archive.on('warning', onProcessThrewWarning);
  archive.on('error', onProcessThrewError);

  // pipe archive data to the file 
  archive.pipe(output);

  // append content
  archive.directory('www/', 'dpd-monitor');

  archive.finalize();
}

function getFormattedDate() {
  var today = new Date();
  var formatted = today.getFullYear() + '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) + '-' +
    ('0' + today.getDate()).slice(-2);
  return formatted;
}

function hasMinifiedJS() {
  var minifiedJS = SRC_DIR + 'www/index.min.js';
  return fs.existsSync(minifiedJS);
}

function onDataWritten() {
  console.log('Completed packaging files to ' + FILENAME);
}

function onProcessThrewWarning(error) {
  if (error.code === 'ENOENT') {
    console.log('Warning:', error);
  } else {
    throw error;
  }
}

function onProcessThrewError(error) {
  throw error;
}
