'use strict';

var colors = require('colors');

var Nodepress = require('./core'); //returns a promise

Nodepress().then(function(app) {
    // app passes along the express server
    console.log('Running app'.red);
})