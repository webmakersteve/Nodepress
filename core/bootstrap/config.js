'use strict';

var when        = require('when'),
    fs          = require('fs'),
    path        = require('path');

var dir = __dirname,
    config = {};

var bufferToString = function(fd) {
    fs.read( )
}

var Config = {
    loadFile: function(path) {
        path = dir + path; //prefix it with the directory

        return when.promise(function(resolve,reject) { //return a promise as usual
           fs.exists(path, function(exists) { //see if the file exists
               if (!exists) return reject('notfound'); //throw not found if it can't find the config

               fs.readFile(path, {flag: 'r'}, function(err,data) {
                    if (err) reject('configunreadable');
                    try {
                        data = JSON.parse(data.toString());
                        resolve(data);
                    } catch (err) {
                        console.log('problem with json');
                        reject(err);
                    };

               });

           });
        });
    },
    getValue: function(str) {
        console.log(str);
    },
    setDirectory: function(directory) {
        dir = directory + path.sep;;
    }
}

module.exports = Config;