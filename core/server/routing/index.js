'use strict';

/*
    files in the routing directory are autoloaded in a callback that passes them the express application.
    We then establish their routes
 */

var Controllers = require('../routes');

module.exports = function(app) {

    app.get('/', function(req,res) {
        // default admin panel
        console.log('index');
        res.end('index');
    });

    return app;

}