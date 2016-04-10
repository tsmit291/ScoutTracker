app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
  addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(results){
    $scope.badgey = results.data.result[0]
    $scope.steps = results.data.rows[1]
    console.log(results);
  }), function(error){
    console.log("an error has occured");
  };
});
