const express = require('express');
const path = require('path');

const port = process.env.PORT || 4200;

var app = new express();


app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});


console.log (`app is up at ${port}.`);
app.listen(port);
