app.controller('dashboardController', function ($scope, $routeParams, badgeService, addBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  $scope.currentBadge = $routeParams.badge_id
  $scope.add = function(newBadge, badgeid){
    postBadgeService.postBadge(newBadge, $routeParams.id, badgeid).then(function(results){

    })
  }
  badgeService.getBadges().then(function(payload){
    $scope.badgeCollection = payload.data;
  }, function(error){
    console.log("an error has occured");
  });
});
