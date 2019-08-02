const args = require('./args');
const convertHTML = require('./convert-html');
const mongoID = require('./mongoid');
const readJSON = require('./read-json');
const rss = require('./rss');
const writeJSON = require('./write-json');
const writeTXT = require('./write-txt');

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const main = async () => {
  const options = args();
  const articles = await readJSON(options.file);
  await asyncForEach(articles, async (article) => {
    article._id = await mongoID(article.date);
    article.html = convertHTML(article.file);
  });
  await writeJSON('output/mongo.json', articles);
  await writeTXT('output/rss.xml', rss(articles));
};

main();
