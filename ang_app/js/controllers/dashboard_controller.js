app.controller('dashboardController', function ($scope, $routeParams, $location, badgeService, addBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;

  $scope.add = function(newBadge, badgeid){
    postBadgeService.postBadge(newBadge, $routeParams.id, badgeid).then(function(results){
      $location.path('/'+ $scope.currentScout + '/dashboard/' + badgeid + '/tracker')
    })
  }
  badgeService.getBadges().then(function(payload){
    $scope.badgeCollection = payload.data;
  }, function(error){
    console.log("an error has occured");
  });
});
