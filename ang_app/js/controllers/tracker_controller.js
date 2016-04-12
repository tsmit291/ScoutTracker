app.controller('trackerController', function ($scope, $timeout, $routeParams, addBadgeService, oneBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
  $timeout(function(){
    addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(badges){
      $scope.badgeCollection = badges.data;
      console.log("this is the badge collection", $scope.badgeCollection);
      for (var i=0;i<$scope.badgeCollection.length;i++) {
        if ($scope.badgeCollection[i].badge_id === parseInt($scope.currentBadge)) {
          $scope.steps = $scope.badgeCollection[i].steps;
          $scope.badgey = $scope.badgeCollection[i];
          $scope.namey = $scope.badgeCollection[i].name;
          break;
        }
      }
      console.log($scope.steps);
    });
  }, 100);
});
