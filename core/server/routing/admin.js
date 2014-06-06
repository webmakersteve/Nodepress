'use strict';

/*
    files in the routing directory are autoloaded in a callback that passes them the express application.
    We then establish their routes
 */

var Controllers = require('../routes');

module.exports = function(app) {

    app.get('/admin', function(req,res) {
        // default admin panel
        console.log('admin');
    });
    app.get('/admin/posts', Controllers.getController('posts'));
    app.get('/admin/posts/create', Controllers.getController('posts', 'create'))
    app.get('/admin/posts/edit/:id', Controllers.getController('posts', 'edit'));
    app.get('/admin/posts/*', function(req,res) {
       //just redirecting to the proper page
        res.header({Location: "/admin/posts"});
    });

    return app;

}