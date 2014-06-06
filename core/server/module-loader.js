'use strict';

/**
  * This file is meant to take a directory and recursively require all
  * of its contents, passing a variable and its return values through each
  * one.
  */

var fs      = require('fs'),
    when    = require('when');

module.exports = function(path, callback) {
   return when.promise(function(resolve,reject) {
       var requirement,
           messages = [];
       fs.readdir( path, function(err, files) {
           if (err) reject(err);

           for (var x in files) {
               try {
                   requirement = require(path + files[x]);
                   callback(requirement);
               } catch (e) {
                   messages.push(e);
               }
           }

           resolve();

       });
   });

}