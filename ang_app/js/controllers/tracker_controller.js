app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
  addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(results){
    $scope.steps = results.data.rows
    $scope.badgey = results.data.result[0]
    console.log($scope.badgey);
    console.log(results.data.rows);
  }), function(error){
    console.log("an error has occured");
  };
});
