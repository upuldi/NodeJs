// console is a global variable
// Node Js browser equalent object is global

//Adding variables to global context
global.newVariable = "some value"
// retrieving values from the global context is similar to accessing array values
console.log(global["newVariable"]);

// Process is anothe global object where you can use
//to terminate the process...
//process.exit(-1);

//To get the environment
console.log(process.env)
