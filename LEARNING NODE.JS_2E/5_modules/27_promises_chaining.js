function someFunctionReturningAPromise() {
    return new Promise((resolve, reject) => {

        var ranVal = Math.random();
        if (ranVal > .5) {
            resolve(ranVal);
        } else {
            reject({
                error: "Random value is lower than the threshold..." + ranVal
            });
        }
    });
}



var promise = someFunctionReturningAPromise();

//Promise chaning can be done with adding then functions to the end 
// promise.then("executes first").then("executes afterwards...")

promise.then((result) => {
    console.log("First Step");
    console.log("Result is : " + result * 10);

    //Assume you are returning another promise inside the first step. 
    //YOU HAVE TO RETURN ANOTHE PROMISE INSIDE THE FIRST STEP to continue 
    return new Promise( (res,rej) => {
        console.log("Retuning another promise at the end of first step...")
        res(result*10);
    });

}, (error) => {
    console.log("First Step Error");
    console.log("Error is : " + JSON.stringify(error));
}).then((result) => {
    console.log("Second Step - Promise Chaning : " + result);
    console.log("Plus 10 : " + (result + 10.000));

    //See, here you have to return a promise inside the then cluase to continue the promise chain
    //third step will not get any value as we have not returned anthing in here.

}).then((result) => {
    console.log("Third step");
    console.log("Multi 10 : " + result *10);
});
