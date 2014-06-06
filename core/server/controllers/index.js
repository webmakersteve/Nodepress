'use strict';

module.exports = {
    getController: function(controllerName, actionName) {

        // look for the controller in this directory and return its pure function
        var controller = require('./posts.js'); //placeholder
        controller.do( actionName ).then(function() {
            resolve();
        }).catch(function(err) {
            reject(err);
        });
    }
}