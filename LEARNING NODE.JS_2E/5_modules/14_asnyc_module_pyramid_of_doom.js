
var fs = require("fs");

function loadFileContent(path, callback) {

    fs.open(path, 'r', (error, handler) => {

        if (error) {
            callback(error);
            return;
        } else if (!handler) {
            callback({
                error: "Invalid Handler",
                message: "bad file handler form fs.open"
            });
            return;
        } else {
            // All fine proceeding....
            fs.fstat(handler, (error, stat) => {

                if (error) {
                    callback(error);
                    return;
                } else {

                    if (stat.isFile()) {
                        var b = new Buffer(stat.size);
                        fs.read(handler, b, 0, stat.size, null, (error, br, buf) => {

                            if (error) {
                                callback(error);
                                return;
                            } else {
                                fs.close(handler, (error) => {
                                    if (error) {
                                        callback(error);
                                        return;
                                    } else {
                                        callback(null, b.toString("utf8", 0, br));
                                    }
                                });
                            }
                        });
                    } else {
                        callback({
                            error: "not a file",
                            message: "Can't load directory..."
                        });
                    }
                }
            });
        }
    });
    console.log("end function call..");
    
}

loadFileContent("testTextFile.txt", (error,content) => {
    console.log(error);
    console.log(content);
});