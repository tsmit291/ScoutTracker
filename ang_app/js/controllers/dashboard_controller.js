app.controller('dashboardController', function ($scope, badgeService){
  badgeService.getBadges().then(function(payload){

    $scope.badgeCollection = payload.data;
    console.log($scope.badgeCollection);
  }, function(error){
    console.log("an error has occured");
  });
});
