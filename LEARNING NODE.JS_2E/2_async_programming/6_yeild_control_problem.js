/**
 * Here this function will not get executed as the other computationally high function is executing.
 * Node is single threaded, so if one thead is occupied so heavyly it will keep on executing...
 */
setTimeout(() => {
  console.log('after 3 sec...')
}, 3000);

/**
 * Assume this array 1 and array 2 have 100K elements and very computationally intensive workload.
 */
function intersectionElements(array1, array2) {

  var intersections = [];

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; i < array2.length; j++) {
      if (array1[i] == array2[j]) {
        intersections.push(array1[i]);
      }
    }
  }

}

/**
 * Assume this array 1 and array 2 are very long arrays with  1000K elements,
 * since the programm execution is working on the arrays timeout function will not execute on time
 * This is something you should consider
 */
var array1;
var array2;

intersectionElements(array1,array2);


//Problemm : settimeout will not execute after 3 seconds as the process is occupied for computationally high workload
//Solution; process.nextTick(callback) or setImmediate(callback);
