var fs = require('fs');
var buff = new Buffer(1000000);

// Here handle is the file which get open
fs.open('testFile.txt', 'r', (error, handle) => {
  fs.read(handle, buff, 0, 100000, null, (error, length) => {
    console.log(buff.toString('utf-8', 0, length));
    fs.close(handle, () => {});
  });
});
