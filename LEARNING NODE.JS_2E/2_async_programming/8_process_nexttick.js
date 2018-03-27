/**
 * process.nextTick is similar to setImmediate which is used to give breathing spece to
 * other operations during a computationally high process is running.
 *
 * process.nextTick is best suited for computationally high sequential operations
 */

function firstStep() {
  //Do some stuffs
  process.nextTick(secondStep());
}

function secondStep() {
  //do some stuffs
  process.nextTick(thirdStep());
}

function thirdStep() {
  //do some stuffs
}
