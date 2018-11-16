/*

Both export and module.export refers to the same object, However when a module is exported via "requires", the object which is refered by the
module.export is being exported to the importing code. Hence object assignment to exports faills to export.

module.export = object <-- will get exported
exports = object <--- will not get exported

whenever you create properties of the module.exports or exports objects actual propertis are created on the object which is refered by the module.exports object


exports.myFunction = () => {} <-- myFunction is a property of the object refered by the module.exports


*/