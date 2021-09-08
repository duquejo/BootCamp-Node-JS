
/**
 * Doing a native http request using Node JS core modules.
 */

const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=5f2ef73ef5a30e700edad50847bd172c&query=45,-75`;

const request = http.request( url, ( response ) => {
  
  /**
   * Stores requests chunks in a variable.
   * @param data string
   */
  let data = '';
  response.on( 'data', (chunk) => {

    data += chunk.toString();
    console.log( chunk );

  });

  /**
   * Finish - Listener
   */  
  response.on('end', () => {
    const body = JSON.parse( data );
    console.log( body );
  });
});

request.on('error', (error) => {
  console.log('An Error');
});
request.end();