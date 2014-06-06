'use strict';

var when        = require('when'),
    config      = require('./config'),
    fs          = require('fs');

var loadConfig = function() {
    return when.promise(function(resolve, reject) {

        //we gotta get the data directory
        config.loadFile('content/data/config.json').then(function(config) {
            console.log(config);
            resolve(config);
        }).catch(function(err){
            console.log(err);
            reject(err);
        })

    })
};

module.exports = loadConfig;