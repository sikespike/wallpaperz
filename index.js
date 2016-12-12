var express = require('express');
var app = express();
//var campaignList = require('./campaign-list.js');
//var campaignData = require('./campaign-data.js');
var fs = require("fs");

// in NodeJS/Express (server)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static("build"));

app.listen(3000, function () {
    console.log('WallpaperZ Server launched on port 3000~!')
});