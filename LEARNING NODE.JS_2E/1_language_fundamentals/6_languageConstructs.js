// == checks the value
console.log(10 == '10'); // => true

// === checks the value and the type
console.log(10 === '10'); // => false
console.log( '10' === '10'); // => true

// '' null undefined 0 NaN == false
console.log('' == false == null == undefined == NaN == 0);

// null and undefined both has the same value
console.log(null == undefined); // true
console.log(null === undefined); // false

//With Objects
var x = new Number(1000);
console.log(x == 1000); // true
console.log(x === 1000); // false

// js supports ? : checks
console.log( x > 100 ? "x is > 100" : "x is < 100");

//Switch statement
switch (x) {
  case 1000: console.log("x is 1000");break;
  case 2000: console.log("x is 1000");break;
  case 3000: console.log("x is 1000");break;
  default: console.log("I dont know")
}

// you can define variables inline
var xx = 10, yy = 20;

// also for object, you can traver object properties with for construct
var object = {
  firstName: "Upul",
  lastName: "Doluweera",
  address: "Australia",
  age: 33
}
for ( key in object) {
  console.log(key)
}

// This is for language construct
var str = "A,b,c,d,e,f"
for (s in str.split(",")) {
  console.log(s);
}
