// Everyobject has  a prototype object.

function Shape() {}

Shape.prototype.x = 0;
Shape.prototype.y = 0;

Shape.prototype.move = function(x,y) {
  this.x = x;
  this.y = y;
}

Shape.prototype.distanceFromOrigin = function () {
  return Math.sqrt(this.x*this.x + this.y*this.y);
}

Shape.prototype.area = function() {
  throw new Error("Need 2d form")
}

var s = new Shape();
s.move(10,10);
console.log("Shape Distancec from origin is : " + s.distanceFromOrigin());
console.log( s instanceof Shape)

// now we are subclassing the superclass and override some methods

function Square() {}

Square.prototype = new Shape();

// inheriting all the properties from the shape class
Square.prototype.__proto__ = Shape.prototype;

// defining a new property
Square.prototype.width = 0;

Square.prototype.area = function() {
  return this.width*this.width;
}

var sq = new Square();
sq.width=10;
sq.move(5,5);
console.log(" Square distanceFromOrigin " + sq.distanceFromOrigin());
console.log( " Square area " + sq.area());
console.log( sq instanceof Square);
console.log( sq instanceof Shape);
