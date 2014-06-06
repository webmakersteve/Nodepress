'use strict';

var colors = require('colors');
var Nodepress = require('./core'); //returns a promise

require('./core/bootstrap/config').setDirectory(__dirname); //set the root directory first

Nodepress().then(function(app) {
    // app passes along the express server
    console.log('Running app'.red);
})