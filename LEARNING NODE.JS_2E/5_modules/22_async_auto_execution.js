
/**
 * AUTO IS USED TO PROVIDE DEPENDENCIES TO FUNCTIONS,
 * when one function is depending on another function those functions can be defined with auto method.
 * First the depending functions get executed then the dependent function.
 * 
 */

var async = require("async");

function autoTest() {

    async.auto({

        funOne: function (cb) {

            setTimeout(() => {
                cb(null, [1, 2, 3]);
            }, 2000);
        },
        funTwo: function (cb) {

            setTimeout(() => {
                cb(null, ["a", "b", "c", "d"]);
            }, 3000);
        },
        funThree: function (cb) {

            setTimeout(() => {
                cb(null, [true, false, true])
            }, 4000);
        },

        /**
         * Dependencies are defined in the array
         * you will get an additional object containing the result of the dependencies.
         * 
         */
        iamDependentOneFieldOneAndTwo: ["funOne","funTwo", (thus_far,cb) => {

            console.log(" Res funOne " + thus_far.funOne);
            console.log(" Res funTwo " + thus_far.funTwo);

            cb(null, {
                alteredResponseOne: thus_far.funOne.join(","),
                alteredResponseTwo: "'" + thus_far.funTwo.join("',") + "'"
            });
        }]
    },
        function (err, res) {
            console.log("Final response : " + JSON.stringify(res));
        });
}

autoTest();