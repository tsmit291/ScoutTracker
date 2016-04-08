app.service("oneBadgeService", function($http){
  var oneBadgeService = {};

  oneBadgeService.getBadge = function(badge_id){
    return
    // $http.get("http://localhost:3000/badges/:id", {method: "jsonp"});
    $http.get("/badges/" + badge_id)
    //return $http.get(heroku app)
  }
  return oneBadgeService;
})
