/**
 * PARARELL WILL EXECUTE THE FUNCTIONS PARARALLY 
 */

var async = require("async");

function parallelTest() {

    async.parallel({

        fieldOne: function (cb) {

            setTimeout(() => {
                cb(null, [1, 2, 3]);
            }, 2000);
        },
        fieldTwo: function (cb) {

            setTimeout(() => {
                cb(null, ["a", "b", "c", "d"]);
            }, 3000);
        },
        fieldThree: function (cb) {

            setTimeout(() => {
                cb(null, [true, false, true])
            }, 4000);
        }
    },
        function (err, res) {
            console.log(err);
            console.log(res);
        });
}

parallelTest();