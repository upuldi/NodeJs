
/**
 * AUTO IS USED TO PROVIDE DEPENDENCIES TO FUNCTIONS,
 * when one function is depending on another function those functions can be defined with auto method.
 * First the depending functions get executed then the dependent function.
 * 
 */

var async = require("async");

function autoTest() {

    async.auto({

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
        },

        /**
         * Dependencies are defined in the array
         * you will get an additional object containing the result of the dependencies.
         * 
         */
        iamDependentOneFieldOneAndTwo: ["fieldOne","fieldTwo", (thus_far,cb) => {

            console.log(" dep function " + thus_far.fieldOne);
            console.log(" dep function " + thus_far.fieldTwo);
            console.log(" dep function " + thus_far.fieldThree);

            cb(null, {
                alteredResponseOne: thus_far.fieldOne.join(","),
                alteredResponseTwo: "'" +  thus_far.fieldTwo.join("',") + "'"
            });
        }]
    },
        function (err, res) {
            console.log(res);
        });
}

autoTest();