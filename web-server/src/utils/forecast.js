/**
 * Forecast custom service
 * @exports forecast to app.js
 * 
 */
 const request = require('postman-request');

/**
 * 
 * Old forecast URL Example
 * @description separated geocode function
 */
// const url = 'http://api.weatherstack.com/current?access_key=5f2ef73ef5a30e700edad50847bd172c&query=37.8267,-122.4233';
// request( { url, json: true }, ( error, response ) => {
//   if( error ) {
//     console.log( 'Unable to connect to Weather service!' );
//   } else if ( response.body.error ){
//     console.log( 'Unable to find location' );
//   } else {
//     const body = response.body.current;
//     console.log( `It is currently ${ body.temperature } degrees out. It feels like ${ body.feelslike } out.` );
//   }
// });

 /**
  * 
  * Using Callback Abstraction Pattern
  * @param {string} lng Longitude
  * @param {string} lat Latitude
  * @param {function} callback forecast callback
  */
const forecast = ( lat, lng, callback ) => {
  const url = `http://api.weatherstack.com/current?access_key=5f2ef73ef5a30e700edad50847bd172c&query=${ parseFloat( lat ) },${ parseFloat( lng ) }`;
  request( { url, json: true }, ( error, { body } ) => {
    if( error ) {
      callback( 'Unable to connect to Weather service!', undefined );
    } else if ( body.error ){
      callback( 'Unable to find location', undefined );
    } else {
      callback( undefined,  `It is currently ${ body.current.temperature } degrees out. It feels like ${ body.current.feelslike } out. There is a ${ body.current.precip }% chance of rain.` );
    }
  });
}

module.exports = { forecast };