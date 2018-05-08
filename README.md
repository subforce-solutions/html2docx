#HTML2DOCX

Very basic html to docx module.

Only manage the following tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`

```js
const html2docx = require('html2docx');
html2docx.create('<p>hello world !</p>')
.then(buffer => {
    // TODO amazing things with buffer
})
```
