const express = require('express');
const path = require('path');

const port = process.env.PORT || 4200;

const app = new express();
app.use('/', express.static(__dirname + "/public"));


//
// app.use('/images', express.static('images'));
// app.use('/stylesheets', express.static('public/stylesheets'))
//
// app.set('view engine', 'html');
//
// app.get('/blog', (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/blog/blog.html"));
// })

console.log (`app is up at ${port}.`);
app.listen(port);


  // dynamic file map:
  //
  // /
  // /blog
  //
  // F images/
  //
  // F stylesheets/
