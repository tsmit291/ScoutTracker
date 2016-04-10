app.controller('dashboardController', function ($scope, $routeParams, badgeService, addBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  badgeService.getBadges().then(function(payload){
    $scope.badgeCollection = payload.data;
  }, function(error){
    console.log("an error has occured");
  });
});
