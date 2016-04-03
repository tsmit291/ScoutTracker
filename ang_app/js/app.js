var app = angular.module('scoutApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'partials/home.html',
  })
});

// remember no hashes on your routes.
