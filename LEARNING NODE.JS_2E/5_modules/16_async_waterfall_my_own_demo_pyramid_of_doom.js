function Algorithem() {}

Algorithem.prototype.multiplyByNumber = function (value, factor, callback) {

    if (factor > 10) {
        callback({
            code: "multi > 10",
            error: "Number is greater than 10"
        });
        return;
    }
    callback(null, factor * value);
}

Algorithem.prototype.devisionByNumber = function (value, factor, callback) {

    if (factor > 5) {
        callback({
            code: "devision > 5",
            error: "Number is greater than 5"
        });
        return;
    }
    callback(null, value / factor);
}

Algorithem.prototype.power = function (value) {
    return value * value;
}

exports.Algorithem = Algorithem;

function doSomeChainOfActions(startingPos, callback) {

    var algo = new Algorithem();

    algo.multiplyByNumber(startingPos, 8, (error, val) => {

        if (error) {
            callback(error);
        }

        if(!val) {
            callback({code: "0 or null" ,error: "null or empty value"});
            return;
        }


        algo.devisionByNumber(val, 3, (error, val) => {

            if (error) {
                callback(error);
            }

            var res = algo.power(val);
            callback(null, res);
        });
    });
}


doSomeChainOfActions(100, (error, result) => {
    console.log("errors: " + error);
    console.log("data: " + result);
});