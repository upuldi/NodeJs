var http = require("http");

var server = http.createServer((request, response) => {

    var responseBodyStr = "{ \"data\" : \"This is my response test\" }";
    var responseHeaders = {
        "content-length": responseBodyStr.length,
        "content-type": "application/json"
    }

    response.writeHead(200, "OK TEST", responseHeaders);
    response.end(responseBodyStr);
});
server.listen(8080);
