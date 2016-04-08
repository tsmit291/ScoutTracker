// get all badges
app.service("badgeService", function($http){
  var badgeService = {};
  badgeService.getBadges = function(){
    return $http.get("http://localhost:3000/badges", {method: "jsonp"});
    //return $http.get(heroku app)
  }
  return badgeService;
});
// get one badge
app.service("oneBadgeService", function($http){
  var oneBadgeService = {};

  oneBadgeService.getBadge = function(badge_id){
    return
    $http.get("http://localhost:3000/badges/:id", {method: "jsonp"});
  }
  return oneBadgeService;
})
