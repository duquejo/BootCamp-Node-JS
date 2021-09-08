/**
 * 
 * Section 4: Express as a Web Server
 * @requires express 4.16.4+
 * 
 * @see Works like a charm with nodemon
 * 
 * @param path
 */
const path = require('path');
const express = require('express');
const hbs = require('hbs');

/**
 * Node JS server constants (Global)
 */
// console.log( __dirname );
// console.log( path.join( __dirname, '../public' ) );

// Define app container
const app = express();

/**
 * Define paths for Express config
 */
const publicDirectoryPath = path.join( __dirname, '../public' );
const viewsPath           = path.join( __dirname, '../templates/views' );
const partialsPath        = path.join( __dirname, '../templates/partials' );

/**
 * Setup handlebars engine and views location
 * 
 * It's recommended to use a templating system like Handlebars to easily manage dynamic content
 * We'll use hbs (handlebars+Express) library to integrate it quickly
 * 
 * @see app.set enables to store in server any value.
 * @see views directory is the default views directory ( Custom directory: /templates)
 * @see https://expressjs.com/es/api.html#app.set
 */
 app.set( 'view engine', 'hbs' );
 app.set( 'views', viewsPath );

 /**
  * Handlebars Partials Setup 
  */
 hbs.registerPartials( partialsPath );

/**
 * 
 * Setup static directory to serve
 * 
 * It's a way to customize the server.
 * @see express.static will provide a path for serving static files.
 */
app.use( express.static( publicDirectoryPath ) )

/**
 * 
 * *****************
 * Custom Routes
 * *****************
 * 
 * HomePage (Handlebars) 
 * 
 * Initialize first route (Main)
 * @param path
 * @param getHandlers
 */

app.get( '', ( request, response ) => {
  /**
   * HBS View rendering
   * @param view hbs file
   * @param object dynamic data
   */
  response.render('index', {
    title: 'Weather app',
    name: 'José Duque'
  });
});

/** 
 * Help page route
 */
app.get('/help', ( request, response ) => {
  // Express returns objects and arrays as JSON
  // response.send([{name: 'Jose',age: 27}, {name: 'Sofía',age: 29}]);

  response.render( 'help', {
    helpText: 'This a useful help text.',
    title: 'Help',
    name: 'José Duque'
  })
});

/**
 * About page route
 */
app.get('/about', ( request, response ) => {
  response.render('about', {
    title: 'About me',
    name: 'José Duque'
  });
});

/**
 * Weather page route
 */
app.get('/weather', ( request, response ) => {
  response.send(
    {
      request: {
        type: 'LatLon',
        query: 'Lat 45.00 and Lon -75.00',
        language: 'en',
        unit: 'm'
      },
      location: {
        name: 'Ingleside',
        country: 'Canada',
        region: 'Ontario',
        lat: '45.000',
        lon: '-75.000',
        timezone_id: 'America/Toronto',
        localtime: '2021-09-07 18:58',
        localtime_epoch: 1631041080,
        utc_offset: '-4.0'
      },
      current: {
        observation_time: '10:58 PM',
        temperature: 22,
        weather_code: 113,
        weather_icons: [
          'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'
        ],
        weather_descriptions: [ 'Sunny' ],
        wind_speed: 9,
        wind_degree: 200,
        wind_dir: 'SSW',
        pressure: 1011,
        precip: 0,
        humidity: 57,
        cloudcover: 0,
        feelslike: 24,
        uv_index: 6,
        visibility: 16,
        is_day: 'yes'
      }
    }
  );
});

/**
 * Using Customized child routes
 */
app.get('/help/*', ( request, response ) => {
  response.render( '404', {
    title: '404',
    notFoundMessage: 'Help article not found',
    name: 'José Duque'
  });
});

/**
 * 404 Route
 * @param wildcard * means "everything except last defined routes"
 */
app.get('*', ( request, response ) => {
  response.render( '404', {
    title: '404',
    notFoundMessage: 'Page not found',
    name: 'José Duque'
  });
});

/**
 * App will be open until process is finished. (Port open)
 * @param port
 * @param callback
 */
app.listen( 3000, () => {
  console.log('Server is up on port 3000.');
} );