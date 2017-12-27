var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.readFile('C:\\20-12-2017-node.js\\notes.json', 'utf8', function (err, notes) {
        if (err) {
            return console.log(err);
        }
        fs.readFile('base.html', 'utf8', function (err, html) {
            if (err) {
                return console.log(err);
            }
            var memos = JSON.parse(notes);
            var divs;
            for (let i = 0; i < memos.length; i++) { 
                divs += '<div>' + memos[i].content + '</div>';
            } 
            html += divs;
            html += '</body></html>';
            res.end(html);
        });
    });

}).listen(2222);