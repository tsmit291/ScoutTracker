'use strict';

angular.module('angAppApp.auth', [
  'angAppApp.constants',
  'angAppApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
