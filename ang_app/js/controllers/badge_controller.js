app.controller('badgeController', function($scope, $routeParams, oneBadgeService){
  $scope.badge_id = badge_id;
  oneBadgeService.getBadge(badge_id).then(function(payload){
    $scope.oneBadge = payload.data;
    console.log(payload);
    console.log(oneBadge);
  }, function(error){
    console.log("an error has occured");
  });
});
