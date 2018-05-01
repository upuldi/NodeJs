function ClassLikeFunction(x) {
    this.someVariable = x;
    this.anotherVariable = 100;

    this.multiplyBy100 = function() {
        console.log("This is the value : " + (x * this.anotherVariable));
    }
}

exports.exportsFunctionName = ClassLikeFunction;