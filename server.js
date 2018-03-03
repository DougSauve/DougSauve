const express = require('express');
const path = require('path');

var app = new express();


app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});


console.log ("app is up at 4200.");
app.listen(4200);
