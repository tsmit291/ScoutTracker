app.controller('mainController', function($scope, $auth){

  $scope.authenticate = function(provider){
    $auth.authenticate(provider);
  }
  console.log("we got here homie. you da best");
});
