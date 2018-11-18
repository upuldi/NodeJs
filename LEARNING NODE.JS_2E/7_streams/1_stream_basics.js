/**



Streams are supporting event driven programming and the coding is done for various events,
we have to pass functions to various events which might occur during the execution.

stream.on(<event>, <function to handle the event>)

WHENEVER YOU ADD EVENT HANDLERS (WITH ON ()) THE NODEJS START EXECUTING THE STREAM.
THAT IS WHY THERE IS NO EXPLICIT CALL TO START EXECUTE THE PROCESS.

basically what we do is create the read steam and set the event handlers, by doing so 
and since we create the stream events are occuring.


 */

var fs = require("fs");

var fileStream = fs.createReadStream("SimpleTextFile.txt");

var dataReadSoFar = ""


//Here we are passing a function to the readable event
//Readable event means we can read data from the stream, 
//but still we have read the data which is readable manually
fileStream.on("readable", () => {

    var readData = ""

    //Reading data from the stream
    var data = fileStream.read();
    if(data) {
        //Read data can be in many forms, It can be just a string or a it come as a buffer
        if(typeof data == "string") {
            readData = data;
        } else if ( typeof data == "object" && data instanceof Buffer) {
            readData = data.toString("utf-8",0,data.length);
        }

        //If we managed to read data from the stream now we add the read data to 
        //another variable. My guess is data become readable many times over the cause of the execution so
        //we need to read available data and add it to make the whole data
        if (readData) {
            dataReadSoFar += readData;
        }
    }
});


//Here we are passing a function to the end event
//This means the steam has read all the data from the source
fileStream.on("end", () => {
    console.log("Whole file has been read : " + dataReadSoFar.toString("utf-8"));
});

//this is the error event, you get an error object passes to theh function.
fileStream.on("error", (e) => {
    console.log("Error occurred...... : " + JSON.stringify(e));
});
