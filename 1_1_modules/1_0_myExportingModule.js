/*

In order to export something from this module you can use the module.export keyword

You can export variables as well as functions

*/

/*
 Exporting properties with module.export
*/

module.exports.somePropertyInMyExportingModule = "SomeValue";

var anotherValue = "AnotherValue"
module.exports.anotherPropertyInMYExportingModule = anotherValue;

/**
It is possible to exporting using exports keyword
*/
exports.someStringValue = "Exports without module is also possible";
exports.someDoubleValue = 2334.56;
exports.someBoolenValue = true;
