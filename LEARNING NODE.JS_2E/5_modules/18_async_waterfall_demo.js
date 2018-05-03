var async = require("async");

function waterfallTest() {

    async.waterfall([

        function (cb) {
            console.log("First function");
            cb(null, 10);
        },
        /**
         * here you have to catch the value passed from the previous function
         */
        function (val, cb) {
            console.log("Second function");
            cb(null, val + 10);
        },
        function (val, cb) {
            console.log("Third function");
            cb(null, val + 10);
        }
    ],
        function (err, res) {
            console.log("err " + err);
            console.log("res " + res);

        });
}

waterfallTest();