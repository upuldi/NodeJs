// Most of the apis supports sync programming, usually apis who are designed to support sync
// programming ends with a xxxSync name

var fs = require('fs');

var f = fs.openSync('testFile.txt','r');
var buff = new Buffer(1000000);
var readToBuff = fs.readSync(f,buff,0,100000);

console.log(buff.toString('utf-8',0,readToBuff));
