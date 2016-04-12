app.controller('trackerController', function ($scope, $routeParams, addBadgeService, oneBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id;
   addBadgeService.getBadge($scope.currentScout, $scope.currentBadge).then(function(badges){
     $scope.badgeCollection = badges.data;
     for (var i=0;i<$scope.badgeCollection.length;i++) {
       if ($scope.badgeCollection[i].badge_id === parseInt($scope.currentBadge)) {
         $scope.steps = $scope.badgeCollection[i].steps;
         $scope.badgey = $scope.badgeCollection[i];
         break;
       }
     }
     console.log($scope.steps);
   });
});
