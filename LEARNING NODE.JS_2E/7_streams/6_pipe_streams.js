/**
 * 
    WHEN YOU ARE READING FROM A ONE STREAM AND JUST WRITING TO ANOTHER, YOU CAN PIPE IT

    stream.pipe(anotherStream);
 * 
 */

var fs = require("fs"),
    http = require("http"),
    path = require("path");

function handleRequest(request, response) {

    //we consider /content/* is static content
    if (request.method.toLowerCase() == "get") {
        if (request.url.substring(0, 9) == "/content/") {
            serveStaticFile(request.url.substring(9), response);
        }
    } else {
        response.writeHead(404, {
            "Content-Type": "application/json"
        });
        var error = {
            error: "not found",
            message: request.url + " was not found."
        }
        response.end(JSON.stringify(error) + "\n");
    }
}

function serveStaticFile(fileName, response) {

    console.log(" Serving file name : " + fileName);

    //Set content type and header params
    var contentType = calculateContentType(fileName);
    response.writeHead(200, {
        "Content-Type": contentType
    });

    var fileReadStream = fs.createReadStream(fileName);

    /**
     * Instead of defining individual events like readable,drain and end, we can just pipe the stream to another stream 
     * as we are just simply reading from a one stream and writing to another stream.
     * 
     */
    fileReadStream.pipe(response);

    fileReadStream.on("error", (e) => {

        response.writeHead(404, {
            "Content-Type": "application/json"
        });

        console.log("inside error..." + JSON.stringify(e));

        var out = {
            error: "File not found - " + fileName,
            description: ""
        };
        response.end(JSON.stringify(out));
    });

}

function calculateContentType(fileName) {
    var extName = path.extname(fileName);
    var contentType = "";
    switch (extName) {

        case ".html":
            contentType = "text/html"
            break;
        case ".css":
            {
                contentType = "text/css";
                break;
            }
        case ".jpg":
        case ".jpeg":
            {
                contentType = "image/jpeg"
                break;
            }
        default:
            contentType = "text/plain";
    }
    return contentType;
}

var server = http.createServer(handleRequest);
server.listen("9090");