/**
 * External file
 * It will be included in app.js
 * 
 * @returns mixed
 */
console.log('utils.js');

// Exporting native variables
const name = 'José';

// Exporting functions
const add = (a,b) => a+b;

module.exports = add;