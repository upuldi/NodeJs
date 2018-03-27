setTimeout(() => {
  console.log('after 3 sec...')
}, 3000);

/**
 * Assume this array 1 and array 2 have 100K elements and very computationally intensive workload.
 */
function intersectionElements(array1, array2, callback) {

  var intersections = [];
  var i = 0;

  function sub_compute_intersections() {

    for (var j = 0; i < array2.length; j++) {
      if (array1[i] == array2[j]) {
        intersections.push(array1[i]);
      }
    }

    if (i < array1.length) {
      i++;
      /**
       * I guess here the idea is to give a breathing time to other functions to execute during a long running processes....
       */
      setImmediate(sub_compute_intersections)
    } else {
      callback(intersections);
    }
  }

  //Calling the function for initial run
  sub_compute_intersections();
}


var array1;
var array2;

intersectionElements(array1, array2, (results) => {
  console.log('Successfull...' + results.length)
});
