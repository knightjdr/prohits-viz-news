const afterCharacter = require('./after-character');

const args = () => {
  const options = {
    file: 'articles.json',
  };
  process.argv.forEach((arg) => {
    if (arg.startsWith('--file')) {
      options.file = String(afterCharacter(arg, '='));
    }
  });
  return options;
};

module.exports = args;
