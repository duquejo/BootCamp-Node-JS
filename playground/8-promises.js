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

// const doWorkPromise = new Promise( ( resolve, reject ) => {
//   setTimeout( () => {
//     // resolve([7, 4, 1]);
//     reject('Things went wrong!');
//   }, 2000 );
// });

// /**
//  * Then : Success (Fulfilled)
//  * Catch : Error (Rejected)
//  */
// doWorkPromise.then( ( result ) => {
//   console.log( `Success ${ result }` );
// }).catch( ( error ) => {
//   console.error( `Error ${ error }` );
// });

/**
 * Promises chaining
 */

const add = ( a, b ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout(() => {
      resolve( a + b );
    }, 2000);
  })
};


/**
 * Example to chaining and nesting
 */
// add( 1, 2 ).then( sum => {
//   console.log( sum );

//   add( sum, 5 ).then( sum2 => {
//     console.log( sum2 );
//   }).catch( e => console.error( e ) );

// }).catch( e => console.error( e ) );

/**
 * Chaining
 * @see Chanining promises are sent as continous return and then. 
 * The catch are globally
 */
add( 1, 1).then( sum => {
  console.log( sum );
  return add( sum, 4 );
})
.then( sum2 => console.log( sum2 ) )
.catch( e => console.error( e ) );