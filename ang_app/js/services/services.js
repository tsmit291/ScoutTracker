// get all badges
app.service("badgeService", function($http){
  var badgeService = {};
  badgeService.getBadges = function(){
    return $http.get("http://localhost:3000/badges", {method: "jsonp"});
    //return $http.get(heroku app)
  }
  return badgeService;
});
// get one badge information on own page
app.service("oneBadgeService", function($http){
  var oneBadgeService = {};
  oneBadgeService.getBadge = function(badge_id){
    console.log(badge_id);
    return $http.get("http://localhost:3000/badges/" + badge_id, {method: "jsonp"});
  }
  return oneBadgeService;
})

// add badge to tracker page from dashboard
app.service("addBadgeService", function($http){
  var addBadgeService = {};
  addBadgeService.getBadge = function(id, badge_id){
  return $http.get("http://localhost:3000/" + id + "/dashboard/" + badge_id + "/tracker", {method: "jsonp"});
}
  return addBadgeService;
})
