'use strict';

// controllers will receive the express request and response objects to do their work
// they export a function that takes req, and response

var when        = require('when');
var themer      = require('themer');

var PostsController = function(req,res) {
    //this is called by itself. It has to have
    var $scope = {};
    $scope.request = req;
    $scope.response = res;

    var actions = {
      'default': function($scope) {
          // this is where the logic goes to get the data return
          console.log('doing default action');
          return when.promise(function(resolve,reject) {
              themer.intend('posts', $scope.res, data).then(function() {
                resolve();
              }).catch(function(err) {
                  reject(err);
              });
          });
      }
    };

    // now we have those set so when we call children methods they will have data they need
    return {
        do: function(action) {
            return when.promise(function(resolve,reject) {
                var doingAction;
                if (actions[action]) doingAction = actions[action];
                else if (actions['default']) doingAction = actions['default'];
                else return reject('noaction');

                //now we need to make sure there isn't a problem with the action or the themer intention
                doingAction($scope).then(function() {
                    resolve();
                }).catch(function(err) {
                   reject(err);
                });

            })
        }
    }

}

module.exports = PostsController;