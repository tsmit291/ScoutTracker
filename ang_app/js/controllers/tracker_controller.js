app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
  addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(results){
    $scope.steps = results.data.rows
    $scope.badgey = results.data.result[0]
  }), function(error){
    console.log("an error has occured");
  };
  // postBadgeService.postBadge($scope.currentScout, $scope.currentBadge).then(function(results){
  //   console.log("***********");
  //   console.log($scope.currentScout);
  // }), function(error){
  //   console.log("an error has occured");
  // }
});
