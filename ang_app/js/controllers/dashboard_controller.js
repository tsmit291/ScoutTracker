app.controller('dashboardController', function ($scope, $routeParams, $location, badgeService, addBadgeService, postBadgeService){
  $scope.currentScout = $routeParams.id;
  getmyBadges();
  $scope.add = function(newBadge, badgeid){
    postBadgeService.postBadge(newBadge, $routeParams.id, badgeid).then(function(results){
      $location.path('/'+ $scope.currentScout + '/dashboard/' + badgeid + '/tracker')
      $scope.badgeCollection = results.data;
      console.log($scope.badgeCollection);
    });
  };

  function getmyBadges(){
    badgeService.getBadges().then(function(payload){
      $scope.badgeCollection = payload.data;
    });
  }
});
