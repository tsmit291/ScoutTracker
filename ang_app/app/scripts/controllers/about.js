'use strict';

/**
 * @ngdoc function
 * @name angAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angAppApp
 */
angular.module('angAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
