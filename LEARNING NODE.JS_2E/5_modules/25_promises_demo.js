/**
 * PROMISES ARE ANOTHER WAY OF MANAGING ASYNC JS CODE.
 * WITH PROMISES YOU HAVE TO ENABLE THE API YOU ARE WORKING WITH TO WORK WITH PROMISES, THIS IS CALLED PROMISIFIED
 * THERE ARE NUMBER OF FLAVERS OF PROMISES
 * 
 * THIS DEMO WILL USE A NPM MODULE CALLED BLUEBIRD TO PROMISIFY AND WORKWITH PROMISES.
 * 
 * xxxAsync().
 * then().
 * then().
 * catch(errorHandler)
 * 
 */

var Promise = require("bluebird");
/**
 * Here we are using bluebird to promisify fs module.
 */
var fs = Promise.promisifyAll(require("fs"));


function loadFileContent(path, callback) {

    //Some common error handling code
    var errorHandler = function (error) {
        console.log("Error occurred....." + error);
        callback(JSON.stringify(error));
    }

    /**
     * bluebird converts the normal functions to promise enabled functions, those promise enabled functions 
     * will end with xxxAsync() signature.
     * open() ==> openAsync()
     * 
     */

     //This is a promise chain
    fs.openAsync(path, 'r')
        .then(function (handler) {

            fs.fstatAsync(handler)
                .then(function (stat) {

                    if (stat.isFile()) {

                        var b = new Buffer(stat.size);
                        fs.readAsync(handler, b, 0, stat.size, null)
                            .then(function (br, buf) {

                                fs.closeAsync(handler)
                                    .then(function () {
                                        callback(null, b.toString("utf8", 0, br));
                                    })
                            })
                            .catch(errorHandler)
                    } else {
                        callback( errorHandler("not a file"), null)
                    }
                }).catch(errorHandler)
        })
        .catch(errorHandler)
}


loadFileContent("testTextFile.txt", (error, content) => {
    console.log(error);
    console.log(content);
});