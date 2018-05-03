var async = require("async");

var collection = [5, 10, 15, 20, 25, 30];

/**
 * filter demo
 */

async.filter(
    collection,
    /** Predicate */
    function (e,cb) {
        if (e % 2 == 0) {
            cb(null,true); 
            return;
        }
        cb(null,false);
    },
    /** Result Function */
    function (e, d) {
        console.log(d);
});

