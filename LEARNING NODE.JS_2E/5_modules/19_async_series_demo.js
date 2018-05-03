/**
 * Doesn't pass the value to one function to another
 * instead it will sums up all the values and pass to the result function
 * 
 * Here it will take all the time time taken to execute individual functions and then the sum of the results will be given.
 * 
 * HERE THE RESULT WOULD BE AN ARRAY AS YOU ARE PASSSING AN ARRAY OF FUNCTIONS, IF YOU WANT GET AN OBJECT AS THE RESULT YOU WOULD HAVE TO 
 * PASS AN OBJECT INSTEAD OF AN ARRAY.
 * 
 * HERE ALL THE FUNCTIONS WILL BE EXECUTED SERIALLY, ONE AFTER ANOTHER
 * 
 */

var async = require("async");

function seriesTest() {
    
    async.series([
        function(cb) {
            setTimeout(() => {
                cb(null,[1,2,3]);
            }, 2000);
        },
        function(cb) {
            setTimeout(() => {
                cb(null,["a","b","c","d"]);
            }, 3000);
        },
        function(cb) {
            setTimeout(() => {
                cb(null,[true,false,true])
            }, 4000);
        }
    ],
    function(err,res) {
        console.log(err);
        console.log(res);
    });
}

seriesTest();