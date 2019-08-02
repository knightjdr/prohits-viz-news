// From https://gist.github.com/samhernandez/5260558.

const pubDate = () => {
  const date = new Date();

  const pieces = date.toString().split(' ');
  const offsetTime = pieces[5].match(/[-+]\d{4}/);
  const offset = (offsetTime) ? offsetTime : pieces[5];
  const parts = [
    pieces[0] + ',',
    pieces[2],
    pieces[1],
    pieces[3],
    pieces[4],
    offset
  ];

  return parts.join(' ');
};

module.exports = pubDate;
