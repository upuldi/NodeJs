/**

introduced in 2017 

The newest way to write asynchronous code in JavaScript. - Same as Promises and callbacks/async

It is non blocking(just like promises and callbacks).

Async / Await was created to simplify the process of working with and writing chained promises.

Async functions
    return a Promise.
        If the function throws an error, 
                    the Promise will be rejected.
        If the function returns a value, 
                    the Promise will be resolved.



 */

function normalFunction(){
    console.log("Normal function");
}

/**
 * Here this function implicitly returns a promise,
 * 
 */
async function asyncFunction(){
    console.log("Async function");
}

normalFunction();
asyncFunction();


async function randomCalculations() {
    var random = Math.random() * 10;
    if (random > 5) {
        return random;
    } else {
        throw {error: "Error occurred, less than 5", descriptionn: random};
    }
}

/**
 * Async function returns a promise, if error rejecting the promise, otherwise resolved it
 */
var response = randomCalculations();
response.then((res)=> {
    console.log("result is : " + res);
},(error)=>{
    console.log("error is : " + JSON.stringify(error));
});


/**
 * await expression is used to wait for the Promise to resolve prior to moving on.
 */