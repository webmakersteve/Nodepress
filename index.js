'use strict';

var Nodepress = require('./core'); //returns a promise

Nodepress().then( function(app) {
    // app passes along the express server
    console.log(app);
})