"use strict";
/**
 *This is the precedence of module resolvement
 *
 * 1.) If it is a built in module resolve right away
 * 2.) check for path
 * 3.) looking for node modules folder, in following procedence.
 *      a/b/c/node-modules
 *      a/b/node-modules
 *      a/node-modules
 */
var module = require('./module.js');


// you can also define the module without the .js
// then you should have a folder with the name of the module and
// package.json shold be inside that folder.
var module = require('./module');

// NPM commands

npm -ls = to see currently installed modules and their dependencies

/**
 * in NodeJs each module will get its own memory space so
 * modules can keep their dependencies in the memory inact.
 * So two modules can keep different versions of the modules
 */

/**
 * Nodjs can manage dependency cycles without any issues.
 * So two modules can be dependent on each other without any problems.
 */

npm link = link modules, any other projects within my machine can use this module

// to publish to npm registry
npm add user
npm publish
npm unpublish
