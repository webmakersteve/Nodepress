'use strict';

var when = require('when');
//this file establishes default routes.

var routes = [];

var setRoutes = function(app) {
    return when.promise(function(resolve,reject) {
        app.get('/', function(req,res) {

            res.render('index', {});
        })
        resolve(app);
    });
}

var setRoute = function( route, callback ) {

}

var iterate = function( app, callback ) {

}

module.exports = {

    setRoute: setRoute,
    each: iterate,
    setRoutes: setRoutes

}
