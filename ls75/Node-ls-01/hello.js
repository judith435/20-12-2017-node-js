

var http = require('http');
var url = require('url');

var callbackModule = require('./callback');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('gunibush >>>>' + callbackModule.sayHello());

    // the Query string
    var queryString = url.parse(req.url).query;
    var num = queryString.split('=')[1];
    
    callbackModule.evenDouble(num, function(error, newNum, time) {
        if (error) {
            res.end(error.message);
        } else {
            res.end(`the new numbr is ${newNum} and wait of ${time}`);
        }
    });

}).listen(1330);
// var evenDouble = function(num, callback) {
//     var timeWait = Math.random();
//     if (num % 2 == 0) {
//         setTimeout(function() {
//             callback(null, num*2, timeWait);
//         }, timeWait * 1000)
//     } else {
//         setTimeout(function() {
//             callback(new Error('not even'));
//         }, timeWait * 1000)
//     }
// }
// var getCourseStudentData;
// function testCompletion() {
//       if (courses.coursesRetrieved.status && students.studentsRetrieved.status) {
//             if (entity === "course"){
//                   courseSave.displayAfterSave(serverResponse, action);
//             } 
//             else {
//                   studentSave.displayAfterSave(serverResponse, action);
//             } 
//             clearInterval(getCourseStudentData);
//       }
// }
// getCourseStudentData = setInterval(testCompletion, 500);
