var async = require("async"),
    algori = require("./16_async_waterfall_my_own_demo_pyramid_of_doom");


function doSomeChainOfActions(startingPos, callback) {

    var algo = new algori.Algorithem();

    async.waterfall([

        function(cb) {
            console.log("1st step");
            algo.multiplyByNumber(startingPos, 8, cb);
        },
        function(val,cb) {
            console.log("second step : " + val);
            if (!val) {
                //Breaking out of the chain by explicit call with error
                cb({ code: "0 or null", error: "null or empty value" });
                return;
            }

            //Proceed to next function...
            cb(null,val);
        },
        function(val,cb) {
            console.log("Third step : " + val);
            algo.devisionByNumber(val,3,cb);
        },
        function(val,cb) {
            console.log("forth step : " + val);
            var res = algo.power(val);

            //break the chain with the direct call
            cb(null, res);
        }
    ], callback);
}


doSomeChainOfActions(100, (error, result) => {
    console.log("errors: " + error);
    console.log("data: " + result);
});

