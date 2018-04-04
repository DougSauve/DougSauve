const express = require('express');

const port = process.env.PORT || 4200;
const app = new express();

app.use(express.static(__dirname + "/public"));

console.log (`app is up at ${port}.`);
app.listen(port);
