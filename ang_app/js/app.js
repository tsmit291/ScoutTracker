var app = angular.module('scoutApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'partials/welcome.html',
    controller: 'mainController'
  })
  .when('/:id/dashboard', {
    templateUrl: 'partials/scouts/scouts_dashboard.html',
    controller: 'dashboardController'
  })
  .when('/:id/dashboard/badges/:badge_id', {
    templateUrl: 'partials/badges/view.html',
    controller: 'badgeController'
  })
  .when('/:id/dashboard/:badge_id/tracker', {
    templateUrl: 'partials/scouts/scouts_tracker.html',
    controller: 'trackerController'
  })

  $authProvider.google({
    clientId: '911347123367-mk5p5j2g5v6f8svm1ossb068qe1q4828.apps.googleusercontent.com'
  })

  $authProvider.google({
    url: '/auth/google',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
    redirectUri: window.location.origin,
    requiredUrlParams: ['scope'],
    optionalUrlParams: ['display'],
    scope: ['profile', 'email'],
    scopePrefix: 'openid',
    scopeDelimiter: ' ',
    display: 'popup',
    type: '2.0',
    popupOptions: {width: 452, height: 633}
  })
});



// remember no hashes on your routes.
