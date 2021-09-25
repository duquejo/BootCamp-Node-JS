/**
 * 
 * Task manager promise chaining example
 */

require('../src/db/mongoose');
const User = require('../src/models/user');

/**
 * Old Promise && Callback method handling
 */
// User.findByIdAndUpdate( '6142aad598f4cee12163c4ff', {
//   age: 1
// }).then( user => {
//   console.log( user );
//   return User.countDocuments({ age: 1 });
// }).then( result => {
//   console.log( result );
// }).catch( e => {
//   console.error( e );
// });

/**
 * Es6 Promise (Async/Await) Handling
 * @param {ObjectId} id UserId to update
 * @param {string} age Age to update 
 * @returns Promise
 */
const updateAgeAndCount = async ( id, age ) => {
  const user  = await User.findByIdAndUpdate( id, { age } );
  const count = User.countDocuments( { age } );
  return count;
};

updateAgeAndCount( '6142aad598f4cee12163c4ff', 2 ).then( count => {
  console.log( count );
}).catch( e => console.error( e ) );