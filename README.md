# ProHits-viz news

News articles for ProHits-viz.

## Instructions

1. Write article as html.
2. Convert html to string for database

`node convert-html.js article.html`

3. Create object for mongodb:

```
{
  details: 'Summary of story',
  hashtags: ['Hashtag1', 'Hashtag2'],
  headline: 'News story',
  html: 'String from step 2'
}
```

© 2019 James Knight.