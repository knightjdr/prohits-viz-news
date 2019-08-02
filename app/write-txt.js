const fs = require('fs');

const writeTxt = (filename, txt) => (
  new Promise((resolve, reject) => {
    fs.writeFile(filename, txt, 'UTF8', (err) => {
      if (!err) {
        resolve();
      } else {
        reject(err);
      }
    });
  })
);

module.exports = writeTxt;
