
/**
 * 
 * File for JSON handling examples
 * 
 */
const fs = require( 'fs' );

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
};

// Converts any value to JSON representation
// const bookJSON = JSON.stringify( book );
// console.log( bookJSON.title );

// Let the program Save/Update a file.
// fs.writeFileSync( '1-json.json', bookJSON );

/**
 * Let the program read a file.
 * @note Its necesary to convert the buffer bits to String
 */
const dataBuffer = fs.readFileSync( '1-json.json' );
const data = JSON.parse( dataBuffer.toString() );

// Setting new values
data.name   = 'José Miguel Duque Mejía';
data.age    = 20;

// Parse to JSON
const dataJSON = JSON.stringify( data );
fs.writeFileSync( '1-json.json', dataJSON );