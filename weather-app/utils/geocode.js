/**
 * Geocoding custom service
 * @exports geocode to app.js
 * 
 * @api https://api.weatherstack.com
 * @param access_key 5f2ef73ef5a30e700edad50847bd172c (user key)
 * @param query 37.8267,-122.4233 (lg,lt)
 * 
 * @uri http://api.weatherstack.com/current?access_key=5f2ef73ef5a30e700edad50847bd172c&query=37.8267,-122.4233
 * 
 */
const request = require('postman-request');

/**
 * 
 * Old geocode URL Example
 * @description separated geocode function
 */
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHVxdWVqbyIsImEiOiJja3QzbzI2cTIwaWlkMm9yenU2dTVnc2ViIn0.Urzbuah4YgOGQY2NcAkL1g&limit=1&language=es';

// request( { url: geocodeURL, json: true }, ( error, response ) => {
//   // If error exists, response will be undefined in the same way with response and error undefined.
//   if( error ) {
//     console.log( 'Unable to connect to Geolocation service!' );
//   } else if ( ! response.body.features ) {
//     console.log( 'Location not found' );
//   } else {
//     const body = response.body;
//     console.log( `Lat: ${ body.features[0].center[1] }\nLng: ${ body.features[0].center[0] }` );
//   }
// });

/**
 * 
 * Using Callback Abstraction Pattern
 * @param {string} address Address to search
 * @param {function} callback geocode callback
 */
const geocode = ( address, callback ) => {

  // We need to encode the 'search" address first before concatenate the URL.
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent( address ) }.json?access_token=pk.eyJ1IjoiZHVxdWVqbyIsImEiOiJja3QzbzI2cTIwaWlkMm9yenU2dTVnc2ViIn0.Urzbuah4YgOGQY2NcAkL1g&limit=1&language=es`;

  request( { url, json: true }, ( error, { body } ) => {
    if( error ){
      callback( 'Unable to connect to Geolocation service!', undefined );
    } else if( body.features.length === 0 ) {
      callback( 'Unable to find location. Try another search.', undefined );
    } else {
      callback( undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

// Module Exports
module.exports = { geocode };