// functions
function testFunction(x,y) {
  console.log(x+y);
}
testFunction(10,20);

// Parameters are not validated in Js
// So calling a function without parameters are possible in Js
testFunction();
// Same goes to callling a function with too many arguments
testFunction(10,"abc",20,30,40)

//with arguments keyword you can see all the arguments passed to the JS functions
function functionWithArgumentKeyword() {
  console.log(arguments);
}
functionWithArgumentKeyword(10,20,30,"test",true)

// To demonstrate the power of arguments, we can define functions which functionWithArgumentKeyword
// arbitary no of arguments and then perform the work needed, by making the coding is much easier task

/*
  This function will be able to handle following calls
  someFunction() --> default values will be used
  someFunction(100) --> given value for cache_size and everything else will be default values
  someFunction({}) --> it will use the given object
*/
function someFunction() {
  //This is the object that we work on
  var int_data = {
    //Here we defined the default values
    cache_size: 10,
    location: "/temp",
    type: "btree"
  };

  var args = arguments;
  for (var i=0; i<args.lenght; i++) {
    if (typeof args[i] == 'number' ) {
        int_data.cache_size = args[i];
    } else if (typeof args[i] == 'object' ) {
        int_data = args[i];
    } else {
      throw new Error("bad param to init cache....");
    }
  }
}


// Annonymous Functions
var x = function(x,y) {
  console.log(x+y);
}
x(10,200);

// one drawback of annonymous functions is that if an error happens within the function
// it might not give you the context in the error log
var anoError = function() {
  throw Error("Something happened.....");
}
// anoError(10);

//Completely annonymous functions and calling them in the same place
var someVariable;
//here we are defining an annonymous function and call the function
// this can be done to encapsulate some logic within the function, so the
//outside of the function can not access that. (for ex here the local variables
// within the function is not accessible outside of the function)
(function (x) {
  var anotherInside = (x * x) + 125;
  someVariable = anotherInside
})(10); //here we are callling the function
console.log(someVariable);
