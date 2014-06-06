'use strict';

var when = require('when');

var loadConfig = function() {
    return when.promise(function(resolve, reject, notify) {
        resolve({
            port: 8000,
            middleware: {
                partialsDir: __dirname + '/views/layouts'
            },
            contentDirectory: __dirname + '/views'
        });
    })
};

module.exports = loadConfig;