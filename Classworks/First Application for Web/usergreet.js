var de = require('./usergreetingmodule');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(de.hello("Abdul Hadi"));
    //console.log(de.hello("Abdul Hadi"));
    res.end();
}
).listen(8080);

