'use strict';

var when = require('when');

var loadConfig = function() {
    return when.promise(function(resolve, reject, notify) {
        resolve({
            port: 8000,
            middleware: {

            },
            contentDirectory: '/Users/ltambini/Development/Nodepress/content/ferntastic'
        });
    })
};

module.exports = loadConfig;