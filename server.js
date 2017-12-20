var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200,{'content-type' : 'text/plain'});
    res.end('hello gunibush are you asleep yet@@@@');
}).listen(1968);