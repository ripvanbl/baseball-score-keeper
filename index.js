var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);

console.log('Starting node server...');
app.use(express.static('./client'));
app.all('/*', function(req, res){
    res.sendFile('index.html', { root: './client'})
});

server.listen(process.env.PORT, process.env.IP)
console.log('node server started: ' + process.env.IP + ':' + process.env.PORT)