function someFunctionDeclaration() {
    console.log("This is a function declaration....")
}

var anotherFunctionDeclaration = function() {
    console.log("This is another function declaration...");
}

function functionAcceptingAnothehrFunction(someFunc) {
    someFunc();
}

var anotherF = functionAcceptingAnothehrFunction((x,y) => { console.log("X :"  + x); console.log("Y : " + y)});
console.log(anotherF);