app.service("scoutService", function($http){
  var scoutService = {};

  scoutService.getScouts = function(){
    return $http.get("http://localhost:3000/scouts", {method: "jsonp"});
    // return $http.get(heroku app)
  }
  return scoutService
})
