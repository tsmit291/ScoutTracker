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
    return $http.get("http://localhost:3000/badges/" + badge_id, {method: "jsonp"});
  }
  return oneBadgeService;
})

// add badge and steps to tracker page from dashboard
app.service("addBadgeService", function($http){
  var addBadgeService = {};
  addBadgeService.getBadge = function(id, badge_id){
  return $http.get("http://localhost:3000/" + id + "/dashboard/" + badge_id + "/tracker", {method: "jsonp"});
}
  return addBadgeService;
})

// app.service("postBadgeService", function($http){
//   console.log("right here");
//   postBadgeService.getBadge = function(id, badge_id){
//     return $http.post("http://localhost:3000/" + id + "/dashboard/" + badge_id + "/tracker", currentBadge, {method: "jsonp"})
//   }. success(function(data, status, headers, config){
//   })
//   .error(function(data, status, header, config){
//   })
// })
