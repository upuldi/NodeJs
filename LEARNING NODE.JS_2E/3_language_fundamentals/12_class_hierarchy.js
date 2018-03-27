function ParentClass() {}
ParentClass.prototype.parentStringField = "DefaultValue"
ParentClass.prototype.parentIntegerField = 0

ParentClass.prototype.parentMethod = function (x,y) {
  console.log("At Parent Class")
  return x+y;
}

function SubClass() {}
SubClass.prototype.__proto__ = ParentClass.prototype;
SubClass.prototype.subclassField = "SubClass Value"

SubClass.prototype.parentMethod = function(x,y) {
  return x*y;
}


// Testing
var parent = new ParentClass();
console.log(parent.parentStringField);
console.log(parent.parentIntegerField);
console.log(parent.parentMethod(10,5));

var child = new SubClass();
console.log(child.subclassField);
console.log(child.parentMethod(10,5));
