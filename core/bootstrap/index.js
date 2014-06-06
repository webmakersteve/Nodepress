'use strict';

var when = require('when');

var loadConfig = function() {
    return when.promise(function(resolve, reject, notify) {
        resolve({});
    })
};

module.exports = loadConfig;