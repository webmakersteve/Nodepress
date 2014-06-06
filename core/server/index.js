'use strict';

var express     = require('express'),
    hbs         = require('express-hbs'),
    compress    = require('compression'),
    when        = require('when');

var init = function(config) {

    //set up the handlebars middleware

    return when.promise(function(resolve, reject, notify) {
        var app = express();
        app.set('view engine', 'hbs');
        resolve(app);
    });
};

module.exports = init;