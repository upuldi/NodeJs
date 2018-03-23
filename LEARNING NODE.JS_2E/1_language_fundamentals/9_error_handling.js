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
  console.log("Error occurred ...." + e.message)
}
