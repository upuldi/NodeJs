// We cant really use strauctured exception handling in async world
// for ex following will fail....

try {
  setTimeout(() => {
    //  throw new Error("Somthing happened here.....")
  }, 4000);
} catch (e) {
  console.log(e.message);
}
// this is failling becase at the time calllback is executing the
// main has finished executed the catch block..

// the solution is to use a pattern in node
// all the callbacks in node expects a error as the first parameter
// if the erro (first param) is not null, upon returining from the callbacks
// you know that something is happened for ex

// someFunction(param1, param2, param3, (error, result1, result2, result3) => {
//
//   // Callback always have errors as the first param so
//   if (error != null) {
//     // somethin has happened...
//   } else {
//     // everything is fine...
//   }
// });
//
