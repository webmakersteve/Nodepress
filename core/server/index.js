'use strict';

var express     = require('express'),
    hbs         = require('express-hbs'),
    compress    = require('compression');

var init = function() {


    this.express = express();
    this.express
        .set('view engine', 'hbs');

    //set up the handlebars middleware


};

module.exports = init;