app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
   addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(badges){
     $scope.badgeCollection = badges;
     for (var i in $scope.badgeCollection) {
       if ($scope.badgeCollection[i].badge_id === $scope.currentBadge) {
         $scope.steps = $scope.badgeCollection[i].steps;
         $scope.badgey = $scope.badgeCollection[i];
         break;
       }
     }
   });
});
