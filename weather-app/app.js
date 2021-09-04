/**
 * Weather app project
 * Async project for archieve asynchronous calls knowledge
 *
 */
const { geocode } = require('./utils/geocode');
const { forecast } = require('./utils/forecast');

/**
 * Node Console Arguments
 */
const address = process.argv[2];
if( !address ) {
  console.error( 'Please add an address for the forecast search.' );
} else {
  
  /**
   * Geocode function
   * ES6 refactor
   */
  geocode( address, ( error, { latitude, longitude, location } = {} ) => {
  
    if ( error ) return console.error( error );
  
    /**
     * 
     * Challenge #1
     * Goal: Create a reusable function for getting the forecast
     */
    forecast( latitude, longitude, (error, forecastData ) => {
  
      if( error ) return console.error( error );
  
      console.log( location );
      console.log( forecastData );
    });
  });
}
