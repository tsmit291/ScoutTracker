'use strict';

/**
 * @ngdoc function
 * @name angAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angAppApp
 */
angular.module('angAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
