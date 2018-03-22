//All 16 bit
//THERE IS NOT CHARACTOR DATA TYPE IN JAVA SCRIPTS

//There is no difference between single quote and double quote in string declarations
var stringWithSingle = 'Single quote string'
var stringWithDouble = 'Double quote string'

//You have to use \ to escape quoats
var stringEscapeOne = 'some sting \' may have quoats'
var stringEscapeTwo = "some \"string may have double quate"

//String length can be get with length property
var someString = "ABCDEFGH";
var stringLength = someString.length;
console.log(stringLength);

//String concatination can be done with + operator
var someString = "first " + " second" + " thrird"

//indexOf
console.log("UpulDoluweera".indexOf("Doluweera"));
console.log("UpulDoluweera".indexOf("Indrajith"));

//substr - starting index, no of chars
console.log("UpulDoluweera".substr(4,9));

//slice - starting index, ending index
console.log("UpulDoluweera".slice(4,13));

//split
console.log("A,B,C,D,E".split(','));

//trim
console.log("   A,B,C,D,E  ".trim());

//regular expressions can be defined without quatations
var regEx = /[aA]{1,4}/
var regNew = new RegExp("[aA]{1,4}")

//You can search with regex
console.log("abcdefgh".search(/[aA]{2,}/))

//Also replace function can be used with regexs
console.log("aaaoookk".replace(/[aA]{2,}/,"b"))
