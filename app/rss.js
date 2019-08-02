const encodeHTML = require('./encode-html');
const pubDate = require('./pub-date');

const itemsTemplate = (items) => (
  items.map((item) => {
    const link = `https://prohits-viz.org/news/${item.headline.replace(/\s/g, '-')}`;
    return `<item>
      <title>${item.headline}</title>
      <description>${item.summary}</description>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${item.date}</pubDate>
      <content:encoded>
        ${encodeHTML(item.html)}
      </content:encoded>
    </item>`
  }).join('\n    ')
);

const rssTemplate = (items) => `<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>ProHits-viz</title>
    <description>News and tutorials on visualizing data at ProHits-viz.</description>
    <link>https://prohits-viz.org/news</link>
    <lastBuildDate>${pubDate()}</lastBuildDate>
    ${itemsTemplate(items)}
  </channel>
</rss>
`;

module.exports = rssTemplate;