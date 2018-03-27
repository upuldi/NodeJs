var fs = require('fs');

function FileObject() {}

FileObject.prototype.fileName = '';
/**
 * This is a function which accepet another function as the callback
 * If you use arrows the context issue will not happen
 */
// callback error,boolean
FileObject.prototype.readFile = function (callback) {

  console.log('inside the read method.....');
  fs.open(this.fileName,'r',(error,handler) => {

    console.log('inside open callback...');
    if(error) {
      console.log('cant open error occurred.. ' + this.fileName);
      callback(error);//callback with error...
      return;
    }

    fs.close(handler);
    callback(null,true);
  });
}

var aFile = new FileObject();
aFile.fileName = "somethingDosentExist.txt"
aFile.readFile((error,isRead) => {
  if(error) {
    console.log('Error inside my callback ...' + JSON.stringify(error));
    return;
  }
});
