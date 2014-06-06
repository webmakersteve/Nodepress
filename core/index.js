'use strict';

var Bootstrap = require('./bootstrap'),
    when = require('when'),
    Server = require('./server');

//establish the boot function
var boot = function() {
    //create the promise that will be exported
    var promise = when.promise(function( resolve, reject ) {
        //load the stuff from bootstrap to get the config
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
                //this means there was a general problem with loading up the application
                //maybe no config? maybe theme doesn't exist?
                reject( err );
            })

    });

    return promise;
}

module.exports = boot;