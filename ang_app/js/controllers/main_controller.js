app.controller('mainController', function($scope, $auth){

  $scope.authenticate = function(provider){
    $auth.authenticate(provider)
    .then(function(response){
      $location.path('/#/welcome')
    })
  }
  console.log("we got here homie. you da best");
});
