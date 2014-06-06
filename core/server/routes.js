'use strict';

var when = require('when'),
    loader = require('./module-loader');
//this file establishes default routes.

var setRoutes = function(app) {
    return when.promise(function(resolve,reject) {
        loader(__dirname + '/' + 'routing/', function(item) {
           app = item(app);
        }).then(function() {
            resolve(app)
        });
    });
}

module.exports = setRoutes
