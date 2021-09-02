/**
 * File requirement
 * @see fs as (F)ile(S)ystem object with file manipulation methods. 
 */
const fs = require('fs');

/**
 * File Handling
 * @requires fs [NodeJS module]
 * 
 * 'writeFileSync' Let the fs create or overwrite the first argument file.
 * 'appendFileSync' Let te fs append content to the first argument file. 
 */
// fs.writeFileSync( 'notes.txt', 'My name is José Duque.');
fs.appendFileSync( 'notes.txt', '\nI\'m from Medellín, Colombia!' );