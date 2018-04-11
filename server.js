const express = require('express');
const path = require('path');

const port = process.env.PORT || 4201;
const app = new express();

// serves a file in public if it exists
app.use(express.static(path.join(__dirname, '/public')));

// redirects all other files to main.js in Reactland

app.get('/*', (req, res) => {
  console.log('going to GET', req.url);
  if (!req.url.includes('.')) {
    req.url = '/';
  }
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

console.log (`app is up at ${port}.`);
app.listen(port);
