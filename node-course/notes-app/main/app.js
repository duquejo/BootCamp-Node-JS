/**
 * Playing with Node Input Module
 * 
 * @see process.argv to get input arguments (System native alternative)
 * 
 * @requires yargs NPM Library - It will be our input variables parser
 * @requires notes.js Custom Library - It has a lots of file handling methods.
 * 
 */
const chalk     = require('chalk'); // Pretty print
const yargs     = require('yargs'); // args parsing

/** */
const notes  = require('./notes'); // Custom user package

// console.log( process.argv );

// if ( command === 'add' ){
//   console.log( 'Adding note!!!' );
// } else if ( command === 'remove' ){
//   console.log( 'Remove note!!!' );
// }

/**
 * yargs!
 * @description yargs provide more useful options for the input variables
 * 
 * - Customize yargs version: yargs.version()
 */
// yargs.version('1.1.0');

// Create add command
/**
 * Adds a new command
 * @param command 'Command name' (Ex: --command)
 * @param describe 'Descriptive text'
 * @param handler 'Command Callback'
 * @param builder 'Generate custom attributes for the current command'
 *    @param describe 'Command attribute description'
 *    @param demandOption 'is Command attribute mandatory?'
 *    @param type 'Sets the Command attribute type' (default: boolean)
 * 
 */

// Add Command
yargs.command({
  command:  'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function( argv ) {
    // console.log( `Title: ${argv.title}\nBody: ${argv.body}` );
    notes.addNote( argv.title, argv.body );
  }
});


// Remove Command
yargs.command({
  command:  'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note!');
  }
});


// List Command
yargs.command({
  command:  'list',
  describe: 'List notes',
  handler: function() {
    console.log('Notes to list...');
  }
});


// List Command
yargs.command({
  command:  'read',
  describe: 'Reading the note',
  handler: function() {
    console.log('Reading this note...');
  }
});

/**
 * Yargs method for show the added commands
 */
yargs.parse();
// console.log( yargs.argv );