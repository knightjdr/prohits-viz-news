const fs = require('fs');
const minify = require('html-minifier').minify;

const minifyOptions = {
  collapseWhitespace: true,
};

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  console.log(minify(data, minifyOptions));
});
