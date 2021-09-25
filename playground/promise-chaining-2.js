/**
 * 
 * Task manager promise chaining example
 */

require('../src/db/mongoose');
const Task = require('../src/models/task');

/**
 * Challenge Time
 * Chaining queries with Mongoose and Promises
 */
// Task.findByIdAndRemove( '614a38ad179cc35f88ecf2d8').then( task => {
//   console.log(`Removed task: ${ task }`);
//   return Task.countDocuments( { completed: false });
// }).then( result => {
//   console.log( result );
// }).catch( e => console.error( e ));

/**
 * Challenge #2
 * Convert last methods into Async/Await
 */
const deleteTaskAndCount = async ( id ) => {
  const task  = await Task.findByIdAndRemove( id );
  const count = await Task.countDocuments( { completed: false } );
  return count;
};

deleteTaskAndCount( '6142bcd11135b18848129f0a' ).then( count => {
  console.log( count );
}).catch( e => console.error( e ) );