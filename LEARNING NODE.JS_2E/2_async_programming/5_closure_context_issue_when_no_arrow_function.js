var fs = require('fs');

function FileObject() {
  this.fileName = '';
  this.readFile = function(callback) {
    //Since the variables defined in this context is accessible within inner contexts
   var self = this;
    console.log('inside the read method.....' + this.fileName);
    fs.open(this.fileName, 'r', function (error, handler) {
      // console.log('inside open callback...' + this.fileName); undefined
      console.log('inside open callback...' + self.fileName);
      if (error) {
        // console.log('cant open error occurred.. ' + this.fileName); // undefined , as this is a different context in here
        console.log('cant open error occurred.. ' + self.fileName); // this is ok as we can access self from here, locally defined
        callback(error); //callback with error...
        return;
      }
      fs.close(handler);
      callback(null, true); //Callback with boolean success flag
    });
  }
}


var aFile = new FileObject();
aFile.fileName = "somethingDosentExist.txt"
aFile.readFile((error, isRead) => {
  if (error) {
    console.log('Error inside my callback ...' + JSON.stringify(error));
    return;
  }
});
