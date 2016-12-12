var express = require('express')
var app = express();
var fs = require("fs")

// in NodeJS/Express (server)
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
    next();
});

app.get('/api/loadInventory', function (req, res) {
    console.log("loadInventory request");
    console.log("reading inventory.json");
    var data = fs.readFileSync("inventory.json");
    //console.log(data);
    res.send(JSON.parse(data));
});

app.listen(3000, function () {
    console.log('WallpaperZ Api Server launched on port 3000~!')
});