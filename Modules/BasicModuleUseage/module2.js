//Module has to export in order to it to be available in the imporint module.


var x =10;
var name = "This is module two";

//Exporting properties, so other modules who import this module is able to access these props
module.exports.x = x;
module.exports.name = name;

// Also you can use exports
exports.p = "Exports without module is also possible";
exports.q = 2334.56;
exports.r = true;
