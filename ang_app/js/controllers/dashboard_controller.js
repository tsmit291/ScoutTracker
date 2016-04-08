app.controller('dashboardController', function ($scope, badgeService, scoutService){
  badgeService.getBadges().then(function(payload){
    $scope.badgeCollection = payload.data;
  }, function(error){
    console.log("an error has occured");
  });

  scoutService.getScouts().then(function(payload){
    $scope.scoutCollection = payload.data;
    console.log(payload.data);
  }, function(error){
    console.log("an error has occured");
  });
});
