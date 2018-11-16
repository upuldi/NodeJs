/*

Promises are a kind of design pattern used to remove the clutterness of the code.

PROMISES REPRESENTS A RESULT OF A FUNCTION, THE FUNCTION/CODE THAT A PROMISE WRAP START EXECUTING 
WHEN THE PROMISE IS BEING CREATED.

THAT MEANS WHENA A PROMISE IS CREATED THE EXECUTION IS ALREADY STARTED, PROMISE JUST REPRESENTS THE RESULT.

Definition
    A Promise is a proxy for a value not necessarily known when the promise is created.

Simple Term
    A promise is a word taken for some action
    A promise might
            fullfill --> Promise is resolved
            deny  --> Promise is rejected   

Promises can be 
    Created inside the JS code or use external lib to create them
    Any promise that performs async operations should call any one of the two methods resolve() or reject().
    thenFunction() should be called on the promise
        It takes two anonymous functions as parameters.
            The first function executes
                if the promise is resolved and the 
            second function executes
                if promise is rejected.

 */

 //Creating a promise
var myPromise = new Promise(function (resolve, reject) {});

/**
 * The following function returns a promise, like an sync function.
 * So it is easier to handle and do the coding.
 */
function someFunctionReturningAPromise() {
    return new Promise((resolve,reject) => {

        var ranVal = Math.random();
        if (ranVal > .5) {
            //Resolving as we consider it has no values
            resolve(ranVal);
        } else {
            //Reject it as we consider error has been happened.
            reject({error: "Random value is lower than the threshold..." + ranVal});
        }
    });
}


//Receiver should call then() on the promise returned
var promise = someFunctionReturningAPromise();

//Then method accept a success function and error function
promise.then((result) => {
    console.log("Inside success function of the promise.then()");
    console.log("Result is : " + result);
},(error) => {
    console.log("Inside error function of the promise.then()");
    console.log("Error is : " + JSON.stringify(error));
});

