(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name skrnotesgithubioApp
   * @description
   * # skrnotesgithubioApp
   *
   * Main module of the application.
   */
  angular
    .module('skrnotesgithubioApp', [
      'ngAnimate',
      'ngCookies',  // Add library names here in this array to include new libraries.
      'ngMessages', // or else you won't be able to use it. i.e. doesn't work
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ngMaterial'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
