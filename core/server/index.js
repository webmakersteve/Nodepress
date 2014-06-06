'use strict';

var http        = require('http'),
    express     = require('express'),
    hbs         = require('express-hbs'),
    compress    = require('compression'),
    when        = require('when'),
    routes      = require('./routes');

var setupExpress = function(config) {
    var app = express();
    app.engine('hbs', hbs.express3(config.middleware));
    app.set('view engine', 'hbs');
    app.set('views', config.contentDirectory);
    app.use(compress());

    return app;
}


var createRoutes = function(app,config) {
    return when.promise(function(resolve,reject) {
        routes.setRoutes(app).then(function(app) {
            var port = config.development.port;
            app.listen(port, function() {
                console.log('listening');
                resolve(app);
            });
        })
    });
}

var getReady = function(config) {
    return when.try(setupExpress, config).then(function(app) {
        createRoutes(app,config);
    });
}



var init = function(config) {

    //set up the handlebars middleware

    return when.promise(function(resolve, reject, notify) {

        getReady(config).then(function(obj) {
            console.log('resolved');
            console.log(obj);
            resolve(obj);
        });

        //now we need to set the routes


    });
};

module.exports = init;