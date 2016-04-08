app.controller('badgeController', function($scope, $routeParams, oneBadgeService){
  badge_id = $routeParams.id;

  oneBadgeService.getBadge(badge_id).then(function(payload){
    $scope.oneBadge = payload.data[0];
  }, function(error){
    console.log("an error has occured");
  });
});
