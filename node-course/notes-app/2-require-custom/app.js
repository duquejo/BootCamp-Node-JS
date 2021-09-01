/**
 * Lesson #2
 * Requiring new files from external files 
 * 
 * @requires utils.js
 */

// const add = require('./utils');
// const sum = add( 4, -2 );
// console.log( sum );

const getNotes = require('./notes');

console.log( getNotes() );