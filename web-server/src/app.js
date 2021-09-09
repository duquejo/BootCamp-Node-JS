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
 * Custom Modules 'Geocode' 'Forecast'
 */
const { geocode } = require('./utils/geocode');
const { forecast } = require('./utils/forecast');

/**
 * Node JS server constants (Global)
 */
// console.log( __dirname );
// console.log( path.join( __dirname, '../public' ) );

// Define app container
const app = express();

/**
 * Get port
 * @fallback 3000 port (Local)
 */
const port = process.env.PORT || 3000;

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

  // Required address
  if( ! request.query.address ) {
    return response.send({
      error: 'You must provide an address'
    });
  }

  /**
   * Geocode function
   */
  geocode( request.query.address, ( error, { latitude, longitude, location } = {} ) => {
    if ( error ) return response.send( { error } );
    forecast( latitude, longitude, (error, forecast ) => {
      if( error ) return response.send( { error } );

      // Return data
      response.send({ forecast, location, address: request.query.address });
    });
  });
});

/**
 * Evaluating Query String URL
 * @see request.query has all GET query args.
 */
app.get('/products', ( request, response ) => {

  if( ! request.query.search ){
    return response.send({
      error: 'You must provide a search term'
    });
  }

  console.log( request.query.search );

  response.send({
    products: []
  })

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
 * 
 * @see Port If we work locally we could use 3000
 * 
 * @see Note: We can use in the terminal the nodemon service listening 
 * hbs changes with: `nodemon src/app.js -e js,hbs` CLI Command.
 */
app.listen( port, () => {
  console.log( `Server is up on port ${port}.` );
} );