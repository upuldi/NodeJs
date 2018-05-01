var fs = require("fs");

function FileDemo(fileName) {
    this.fileName = fileName;
}


FileDemo.prototype.readFileFunction = function(callback) {

    /** What to do after the file is opened */
    fs.open(this.fileName,"r", (error,handler) => {

        // Have to check whether errors are there 
        if(error) {
            console.log("Errors occurred...");
            callback(error);
        } 
        callback(null,handler);
    });
}


var fileObj = new FileDemo("testFile.txt");
fileObj.readFileFunction((error,data) => {
    if(error){
        console.log("Error Occurred....");
    }
    console.log(data);
});



