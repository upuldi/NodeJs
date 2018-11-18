/**
 * Here we are writing a custom stream to explain the stream behaviour
 * This stream is supporting only two events.
 */


var events = require("events");

function Downloader() {}

//Set the parent class
Downloader.prototype = new events.EventEmitter();
Downloader.prototype.__proto__ = events.EventEmitter.prototype;

//Define subclass fields
Downloader.prototype.url = null;

//Download function
Downloader.prototype.download = function(url) {
    
    //get the local reference
    var self = this;

    //Set the url to local refernce
    this.url = url;

    //trigger the start event 
    self.emit("start", url);

    //here the timeout simulate the download task.
    setTimeout(() => {
        //here we trigger the end event
        self.emit("end", " *** This is the downloaded content from the file **** ");
    }, 2000);
}


var d = new Downloader();
d.on("start", (url) => {
    console.log("Started downloading ...... : " + url);
});

d.on("end", (content) => {
    console.log("Downoading is finished....");
    console.log(content);
} );


//Downloading a file
d.download("http://someUrl.com");
