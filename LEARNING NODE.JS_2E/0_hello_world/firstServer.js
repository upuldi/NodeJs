var http = require("http");

function process_requests(req, res) {

    var body = 'This is the response body....';
    var content_length = body.length;

    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });

    res.end(body);
}

var server = http.createServer(process_requests);
server.listen(8080);