app.controller('mainController', function($scope, $auth, $routeParams){

  $scope.authenticate = function(provider){
    $auth.authenticate(provider)
    .then(function(response){
      $location.path('/#/dashboard')
      console.log(response);
    })
  }
});
