# ProHits-viz news

News articles for ProHits-viz.

## Instructions

1. Write article as html.
2. Convert html to string for database

`node convert-html.js article.html`

3. Create object for mongodb. Note, headlines should not have dashes as they
are used for encoding whitespace in the URL.

```
{
  headline: 'News story',
  html: 'String from step 2',
  summary: 'Summary of story'
}
```

© 2019 James Knight.