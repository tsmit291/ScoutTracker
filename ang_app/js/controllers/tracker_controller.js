app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
  badgey = addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(results){
    $scope.badgey = results.data[0]
  }), function(error){
    console.log("an error has occured");
  };
});
