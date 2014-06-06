'use strict';

var when = require('when');
//this file establishes default routes.

var routes = [],
    routesInUse = [];

var setRoutes = function(app) {
    return when.promise(function(resolve,reject) {
        for (x in routes) {
            app.get('/', function(req,res) {

                res.render('index', {});
            })
        }
        resolve(app);
    });
}

var setRoute = function( route, callback ) {
    routes.push({route: callback});
    routesInUse.push(route);
}

var iterate = function( app, callback ) {
    //needs to iterate t
}

module.exports = {

    setRoute: setRoute,
    each: iterate,
    setRoutes: setRoutes

}
