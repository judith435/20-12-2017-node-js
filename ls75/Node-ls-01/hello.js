// file to start with
/*
var add = require('doAdd');
add(1,1, function(res) {
    console.log(res);
});
*/

var http = require('http');
var evenDouble = require('./callback');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    evenDouble(2, function(error, newNum, time) {
        if (error) {
            res.end(error.message);
        } else {
            res.end(`the new numbr is ${newNum} and wait of ${time}`);
        }
    });
}).listen(1330);

