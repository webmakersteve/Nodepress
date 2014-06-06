'use strict';

var http        = require('http'),
    express     = require('express'),
    hbs         = require('express-hbs'),
    compress    = require('compression'),
    when        = require('when');

var init = function(config) {

    //set up the handlebars middleware

    return when.promise(function(resolve, reject, notify) {

        var app = express();
        app.engine('hbs', hbs.express3(config.middleware));
        app.set('view engine', 'hbs');
        app.set('views', config.contentDirectory)

        app.listen(config.port, function() {
            console.log('listening');
        });
        resolve(app);
    });
};

module.exports = init;