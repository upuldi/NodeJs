/**
 * 
 * FOR EACH FUNCTION TAKES
 *  1. COLLECTION
 *  2. FUNCTION TO BE CALLED FOR EACH ITERATION
 *  3. ERROR FUNCTION - UNLIKE IN OTHER METHOD, THE ERROR FUNCTION ONLY EXPECT AN ERROR
 * 
 */

var async = require("async");
var array = [1,2,3,4,5]

async.eachSeries(

    array,
    function (element, cb) {

        console.log(" power is :" + element*element);

        //YOU MUST MAKE THIS CALL TO MAKE THE ITERATION HAPPEN
        cb(null);
    },
    function (err) {
        console.log(err);
    }
);

