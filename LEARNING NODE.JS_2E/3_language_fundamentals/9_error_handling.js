var errorGenerator = function () {
  // here new keyword is not that important...
  throw new Error("Somthing bad just happened......");
}

var errorGeneratorWithOutNew = function () {
  throw Error("Somthing bad just happened......");
}

try {
  errorGenerator();
} catch (e) {
  // here message is a variable not a function..
  console.log("Error occurred ...." + e.message)
}
