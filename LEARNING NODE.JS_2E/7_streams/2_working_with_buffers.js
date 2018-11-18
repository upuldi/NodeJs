//Buffers are used to hold data in the memory


//However buffer length and the string length is not same 
//So when creating buffers it is advised to use Buffer.bytelenth method

var anotherString = "復製品";

//here sting length is 3 as the string has 3 chars, however those 3 chars require more space
console.log(anotherString.length);
console.log(Buffer.byteLength(anotherString));



var buff = new Buffer(anotherString.length); //Dont do this 
var correctBuff = new Buffer(Buffer.byteLength(anotherString)); //Do this
 
correctBuff.fill(anotherString);

console.log( " reading back .. " +  correctBuff.toString("utf-8",0,correctBuff.length));
