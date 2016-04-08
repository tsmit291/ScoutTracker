app.controller('badgeController', function($scope, $routeParams, oneBadgeService){
  var badge_id = $routeParams.badge_id;
  oneBadgeService.getBadge(badge_id).then(function(payload){
    $scope.oneBadge = payload.data;
    console.log(payload);
    console.log($scope.oneBadge);
    $scope.steps = $scope.oneBadge.rows;
  }, function(error){
    console.log("an error has occured");
  });
});
