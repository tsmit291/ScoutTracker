app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService){
  console.log("hey we are in the trackerController bro");
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
  badgey = addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(results){
    $scope.badgey = results.data[0]
  })
});
