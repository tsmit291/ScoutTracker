app.controller('badgeController', function($scope, $routeParams, oneBadgeService){
  id = $routeParams.id;

  oneBadgeService.getBadge(id).then(function(payload){
    $scope.oneBadge = payload.data[0];
  }, function(error){
    console.log("an error has occured");
  });
});
