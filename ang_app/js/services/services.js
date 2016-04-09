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
    console.log(badge_id);
    return $http.get("http://localhost:3000/badges/" + badge_id, {method: "jsonp"});
  }
  return oneBadgeService;
})

// add badge to tracker service
app.service("addBadgeService", function($http){
  var currentBadges = {};
  var badgeStories = {};

  this.currentBadges = currentBadges;
  this.badgeStories = badgeStories;

  this.add = function(badgey){
    var badges = {};
    badge.name = this.badge.name;
    badge.image = this.badge.image;
  }
  this.add = function(story){
    var stories = {};
    step.description = this.step.description;
    step.weight = this.step.weight;
    
  }
})
