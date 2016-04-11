app.controller('badgeController', function($scope, $routeParams, oneBadgeService, addBadgeService, postBadgeService){
  var badge_id = $routeParams.badge_id;
  var id = $routeParams.id;
  oneBadgeService.getBadge(id, badge_id).then(function(payload){
    $scope.oneBadge = payload.data;
    $scope.steps = $scope.oneBadge.rows;
  }, function(error){
    console.log("an error has occured");
  });
});
