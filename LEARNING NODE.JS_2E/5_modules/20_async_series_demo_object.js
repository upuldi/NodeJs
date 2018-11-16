/**
 * instead of passing an array of functions you can passs a object with functions  
 * 
 * when you pass an object to the function the result would be an object.
 * 
 */

var async = require("async");

function seriesTest() {

    async.series({

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

seriesTest();