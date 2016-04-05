var app = angular.module('scoutApp', ['ngRoute']);

app.config(function(['$routeProvider', '$authProvider']){
  $routeProvider

  $authProvider.google({
    clientId: '911347123367-mk5p5j2g5v6f8svm1ossb068qe1q4828.apps.googleusercontent.com'
  });

  .when('/', {
    templateUrl: 'partials/home.html'
  })
});

// remember no hashes on your routes.
