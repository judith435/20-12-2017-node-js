var http = require('http');
var fs = require('fs')

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.readFile('C:/nodeJS/20-12-2017-node-js/notes/notes.json', 'utf8', function (err, notes) {
        if (err) {
            return console.log(err);
        }
        fs.readFile('C:/nodeJS/20-12-2017-node-js/notes/base.html', 'utf8', function (err, html) {
            if (err) {
                return console.log(err);
            }
            var memos = JSON.parse(notes);
            var divs = '';
            for (let i = 0; i < memos.length; i++) { 
                divs +=  '<div>' + '<p>' + memos[i].date + '</p>' 
                                 + '<p>' + memos[i].time + '</p>' 
                                 + '<p>' + memos[i].content + '</p>'  + '</div><br>';
            } 
            html += divs;
            html += '</body></html>';
            res.end(html);
        });
    });

}).listen(5432);