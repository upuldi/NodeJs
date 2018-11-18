var fs = require("fs"),
    http = require("http");

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

    fileReadStream.on("readable", () => {

        var data = fileReadStream.read();
        if (data) {
            if (typeof data == "string") {
                //We can write it to the response immidiately
                response.wite(data);
            } else if (typeof data == "object" && data instanceof Buffer) {
                //Writing the data to the response immidiately
                response.write(data.toString("utf-8", 0, data.length));
            }
            //here we are not collecting the data and writing it once 
        }
    });

    fileReadStream.on("end", () => {
        response.end();
    });

    fileReadStream.on("error", (e) => {
        response.write(JSON.stringify(e));
    });

}

function calculateContentType(fileName) {
    return "text/html"
}

var server = http.createServer(handleRequest);
server.listen("9090");