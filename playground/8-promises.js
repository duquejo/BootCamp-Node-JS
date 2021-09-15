/**
 * 
 * Comparing Callback Pattern VS ES6 Promises Pattern
 * 
 */

// const doWorkCallback = ( callback ) => {
//   setTimeout( () => {

//     // Success
//     // callback( undefined, [1, 4, 7] );

//     // Failed
//     // callback( 'This is my error', undefined );
//   }, 2000 );
// };

// doWorkCallback( (error, result ) => {
//   if( error ) {
//     return console.error( error );
//   }

//   console.log( result );
// });

const doWorkPromise = new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    // resolve([7, 4, 1]);
    reject('Things went wrong!');
  }, 2000 );
});

/**
 * Then : Success (Fulfilled)
 * Catch : Error (Rejected)
 */
doWorkPromise.then( ( result ) => {
  console.log( `Success ${ result }` );
}).catch( ( error ) => {
  console.error( `Error ${ error }` );
});