/**
 * Playing with ES6 Default params
 */

const greeter = ( name = 'user', age ) => {
  console.log( `Hello ${ name }`);
}

greeter('Jose');

greeter();