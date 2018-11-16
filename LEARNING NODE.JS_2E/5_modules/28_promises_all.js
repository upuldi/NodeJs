/**
 * 
 
 Promise.all function takes a list of promises in the given order and 
 returns another promise which we can use a then method to conclude the logic.

 We should use Promise.all when we don’ t care about the order of execution but
 finally message should be filled with the expected content.

 Promise.all fails if any one of the Promise got rejected.It is an andoperation between promise fulfillments

 * 
 */

 var summation = () => {
     return new Promise( (res,rej) => {
         console.log("Inside summation");
         setTimeout(() => {
             res( "SUMMATION");
            }, 3000);
         });
 }

var multiplication = () => {
    return new Promise((res,rej) => {
        console.log("Inside multiplication");
        setTimeout(() => {
            res("MULTIPLICATION");
        }, 2000);
    });
}

var division = () => {
    return new Promise((res,rej) => {
        console.log("Inside devision ");
        setTimeout(()=>{
            res("DIVISION");
        },4000);
    });
}

console.log("Before promise all");

//This is similar to async series function.
//Functions are executed 
Promise.all([summation(),multiplication(),division()]).then((res) => {
    console.log("Final Answer : " + res);
    //Here the result is an array
    console.log("Final Answer : " + res[0]);
}, (error) => {
    console.log("Error occurred.... " + error);
});


console.log("After promise all");