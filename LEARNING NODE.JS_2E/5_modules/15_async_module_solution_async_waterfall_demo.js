/**
 * You need to install async module to run this file
 * npm install async
 * 
 */

var async = require("async"),
    fs = require("fs");

/**
 * async.waterfall() takes two arguments
 *  1. Array of functions
 *          These functions will executed one at a time, if an error occurred it will executed the main callback 
 * 
 *          *** Every array function is given a callback parameter which can be used to pass the execution  to the next function 
 *              in the chain along with other passed parameters to the callback which would have called within the current function.
 *              for ex :
 *                  someCallbackFunction(error,param1,param2) will be 
 *                      function(param1,param2,callback) {}
 * 
 *                  so every parameter other than the error param will be passed into the next chaining function.
 *  
 *              ex:
 * 
 *                  function firstStep(a,b,c, callBack) {
 *                          //success
 *                         callback(null,p,q,r);
 *                  }
 * 
 *                  firstStep(a,b,c, (p,q,r) => {
 *                      //second step
 *                      thirdStep(k,l,m, (h,i,j) => {
 *                          //forth step
 *                      });
 *                  })
 * 
 * 
 *              will convert to 
 *  
 *              async.waterfall( [
 *                  firstStep(a,b,c) {},
 *                  secondStep(p,q,r) {},
 *                  thirdStep(k,l,m) {}
 *                  ], () => {
 *                  //Final Result
 *               } );
 * 
 *  2. results function
 *          This function will be executed if a function in the function array got an error or at the end of the
 *          function execution.
 * 
 * async.waterfall(arrary of functions, function);
 */

function loadFileContent(path) {

    var fileHandle;
    async.waterfall([

        function (callback) {
            fs.open(path, 'r', callback);
        },

        //Since fs.open() callback accepts handlder with error, handler is added to this callback.
        function (handler, callback) {
            if (!handler) {
                //passing an error and break the chain
                callback({
                    error: "Invalid Handler",
                    message: "bad file handler form fs.open"
                });
                return;
            } else {
                //Passing the callback to the next function in the chain
                fileHandle = handler;
                callback(null, handler);
            }
        },

        function (handler, callback) {
            fs.fstat(handler, callback);
        },

        function (stat, callback) {

            if (!stat.isFile()) {
                callback({
                    error: "not a file",
                    message: "Can't load directory..."
                });
            }
            var buff = new Buffer(stat.size);
            fs.read(fileHandle, buff, 0, stat.size, null, callback);
        },

        function (br, buff, callback) {

            fs.close(fileHandle, (error) => {
                if (error) {
                    callback(error);
                    return;
                } else {
                    callback(null, buff.toString("utf8", 0, br));
                }
            });
        }


    ], function (error, results) {

        //errors and results function goes here.....
        console.log(error);
        console.log(results);
    });
}



loadFileContent("testTextFile.txt");