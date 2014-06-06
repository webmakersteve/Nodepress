'use strict';

var Bootstrap = require('./bootstrap'),
    when = require('when'),
    Server = require('./server');

var boot = function() {
    var promise = when.promise(function( resolve, reject, notify ) {

        Bootstrap()
            .then( function(config) {

                //now we will create a server with this config
                var app = new Server(config); //returns a promise

                app.then( function( obj ) {
                    resolve( obj );
                }).catch(function( err ) {
                    reject( err );
                })

            })
            .catch(function(err) {
                reject( err );
            })

    })
}

module.exports = boot();