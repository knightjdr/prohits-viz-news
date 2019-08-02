# ProHits-viz news

News articles for ProHits-viz.

## Instructions

1. Write article as html and place in dated folder, e.g. `2019/august/2019-8-2-article.html`

2. Add article details to `articles.json`. Note, headlines should not have dashes as they
are used for encoding whitespace in the URL.

```
  {
    "date": "Friday, 2 Aug 2019 12:00:00 GMT",
    "file": "2019/august/2019-8-2-article.html",
    "headline": "Article headline",
    "summary": "Summary of the article."
  },
```

3. Run script
```
node app/index.js
```

4. Output in `output` folder:
* `mongo.json`: json array of articles for database
* `rss.xml`: rss feed for website

© 2019 James Knight.