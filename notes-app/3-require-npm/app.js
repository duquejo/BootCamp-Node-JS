/**
 * Import any NPM Dependencies
 * 
 * Importing modules from NPM example.
 * 
 * @see validator Enable easy string validations
 * @see chalk Terminal color support
 * @see nodemon Live listening Node JS Server
 * 
 */
const validator = require('validator');
const chalk     = require('chalk');

console.log( validator.isURL( 'https://joseduque.co' ) );

console.log( chalk.red.bold.inverse( 'Error!' ) );