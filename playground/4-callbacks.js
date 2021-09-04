/**
 * 
 * Callbacks Playground theory
 * 
 */

setTimeout(() => {
  console.log( 'Two seconds are up' );
}, 2000);


const names = [ 'Jose', 'Sofia', 'Sergio' ];
const shortNames = names.filter( name => {
  return name.length <= 4
});


/**
 * Callback pattern
 * We can use callbacks for handle async requests, 
 * it waits any requests at the end and call any function with the returning data.
 * 
 * @param {string} address 
 * @param {callback} callback 
 */

const geocode = ( address, callback ) => {
  setTimeout(() => {
    callback( { latitude: 0, longitude: 0 } );
  }, 2000);
}
geocode('Philadelphia', ( data ) => console.log( data ) );

/**
 * 
 * Challenge #2
 * 
 * @param {string} a First number
 * @param {string} b Second number
 * @param {function} callback callback function
 */
const add = ( a, b, callback ) =>{
  setTimeout(() => {
    // Return sum.
    callback( parseInt( a ) + parseInt( b ) );
  }, 2000);
}
add( 1, 4, sum => console.log(sum) );