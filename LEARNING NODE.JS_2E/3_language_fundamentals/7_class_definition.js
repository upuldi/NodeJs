// Classes are defined as functions in JS

function Shape() {

  this.x = 0;
  this.y = 0;

  this.move = function(x,y) {
    this.x = x;
    this.y = y;
  }

  this.distanceFromOrigin = function() {
    return Math.sqrt(this.x*this.x,this.y*this.y);
  }
}

var s = new Shape();
s.move(10,10)
console.log("Distancec from origin is : " + s.distanceFromOrigin());
