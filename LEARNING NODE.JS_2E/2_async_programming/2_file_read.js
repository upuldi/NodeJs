var fs = require('fs');
var buff = Buffer.alloc(1000000);

// Here handle is the file which get open
fs.open('testFile.txt', 'r', (error, fileDriscripter) => {
  console.log("fileDriscripter : " + fileDriscripter);
  fs.read(fileDriscripter, buff, 0, 100000, null, (error, length) => {
    console.log(buff.toString('utf-8', 0, length));
    fs.close(fileDriscripter, () => {});
  });
});
