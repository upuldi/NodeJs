/**
 * 
 * A read operation is much faster than a write operation, hence when we are writing to the response object
 * we might have to slow down, the response object might not be ready to write,
 * 
 * response.write() return a bool value, to indicate whether it is OK to CONTINUSLLY write to the response
 * otherwise we have to pause the reading operation and resume it.
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

    fileReadStream.on("readable", () => {

        var data = fileReadStream.read();
        var readDataReadyToWrite = "";

        if (data) {

            if (typeof data == "string") {
                readDataReadyToWrite = data;
            } else if (typeof data == "object" && data instanceof Buffer) {
                readDataReadyToWrite = data.toString("utf-8");
            }

            //This is the official doc -
            //Returns false if all or part of the data was queued in user memory. 'drain' will be emitted when the buffer is free again.
            //Basically if a part of the data is queued the return value is false.
            //And drain event is emitted when the buffer is free ?
            if (!response.write(readDataReadyToWrite)) {
                //Data is talking time to written to the response.So we can pause the read steam
                fileReadStream.pause();
            }
        }
    });

    //Drain event is automatically emmitted when the buffer is free again. 
    fileReadStream.on("drain", () => {
        fileReadStream.resume();
    });

    fileReadStream.on("end", () => {
        response.end();
    });

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