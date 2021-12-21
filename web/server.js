/**
 * Import base packages
 */
 const express = require('express');
 const app = express();
 
 /**
  * Check if we are using the dev version
  */
 const dev = process.env.NODE_ENV !== 'production';
 
 /**
  * Import own packages
  * Assets will be introduced later
  */
//  const assets = require('./assets');
 
 /**
  * Define SPA renderer
  * Single Page Application renderer
  */
 const spa = (req, res) => {
    //  const files = assets();
 
     res.render('index', {
         protocol: req.get('host'),
         hostname: req.protocol,
         baseUrl: `${req.protocol}://${req.get('host')}/`,
         contentApi: dev ? 'http://localhost:4001' : '/api/content',
        //  assets: {
        //      js: files["main.js"],
        //      css: files["main.css"]
        //  }
     });
 };

 
 /**
  * Set template engine
  * Currently not interested in SEO
  */
//  app.set('view engine', 'ejs');
//  app.set('views', `${__dirname}/template`);

 
 /**
  * Request logger
  */
 app.use((req, res, next) => {
     log.trace(`[Web][REQUEST]: ${req.originalUrl}`);
     next();
 });
 
 /**
  * Serve static public dir
  * TODO: Ask Glenn what this does
  */
 app.use(express.static(`${__dirname}/public`));
 
 /**
  * Serve assets on dev
  * TODO: Ask Glenn what this does
  */
 if(dev) {
     app.use('/assets', express.static(`${__dirname}/../assets/src`));
 }
 
 
 /**
  * Configure routers
  * Currently not interested in this part
  */
//  app.get('/sitemap.xml', (req, res) => {
//      res.status(404);
//      res.send('Not Found!')
//  });
//  app.get('/robots.txt', (req, res) => {
//      res.status(404);
//      res.send('Not Found!')
//  });
//  app.get('*', (req, res) => spa(req, res));
 
 /**
  * Setup default 404 message
  */
 app.use((req, res) => {
     res.status(404);
     res.send('Not Found!')
 });
 
 /**
  * Start listening on port
  */
 app.listen(3000, '0.0.0.0', () => {
     log.info(`[Web] App is running on: 0.0.0.0:3000`);
 });