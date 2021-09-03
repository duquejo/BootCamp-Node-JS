/**
 * Weather app project
 * 
 * Async project for archieve asynchronous calls knowledge
 * 
 * @api https://api.weatherstack.com
 * @param access_key 5f2ef73ef5a30e700edad50847bd172c (user key)
 * @param query 37.8267,-122.4233 (lg,lt)
 * 
 * @uri http://api.weatherstack.com/current?access_key=5f2ef73ef5a30e700edad50847bd172c&query=37.8267,-122.4233
 */
const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=5f2ef73ef5a30e700edad50847bd172c&query=37.8267,-122.4233';

// request( { url, json: true }, ( error, response ) => {
//   const body = response.body.current;
//   console.log( `It is currently ${ body.temperature } degrees out. It feels like ${ body.feelslike } out.` );
// });

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZHVxdWVqbyIsImEiOiJja3QzbzI2cTIwaWlkMm9yenU2dTVnc2ViIn0.Urzbuah4YgOGQY2NcAkL1g&limit=1&language=es';

request( { url: url2, json: true }, ( error, response ) => {
  const body = response.body;
  const lat = body.features[0].center[1]; // lat
  const lng = body.features[0].center[0]; // lng
  console.log( `Lat: ${ lat }\nLng: ${ lng }` );
});

// Geocoding service
// Address -> lat/lng -> WeatherApp