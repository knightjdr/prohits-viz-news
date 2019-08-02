const fs = require('fs');
const minify = require('html-minifier').minify;

const minifyOptions = {
  collapseWhitespace: true,
};

const convertHTML = (file) => {
  const hmtl = fs.readFileSync(file, 'utf8');
  return minify(hmtl, minifyOptions);
};

module.exports = convertHTML;
