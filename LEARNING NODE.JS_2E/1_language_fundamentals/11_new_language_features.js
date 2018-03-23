// Annonymous functions like lambda style
var oldStyle = function(a,b) {
  return  a+b;
}
console.log(oldStyle(5,10));

//This is the new lambda style
var newStyle = (a,b) => a+b;
console.log(newStyle(5,10));

// For of loop
// for of loop can be applied to any iterable collection

//before --> For in loop
// Iterate over indexes
var array = [1,2,3,4,5,6];
for (id in array) {
  console.log(array[id])
}

// new --> for of loop
//Iterate orver values
for ( value of array) {
  console.log(value);
}
