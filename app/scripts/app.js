/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'services/myservice'] /*deps*/ , function(angular, MainCtrl, AboutCtrl, MyServiceService) /*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name projetazzoApp
   * @description
   * # projetazzoApp
   *
   * Main module of the application.
   */
  return angular
    .module('projetazzoApp', [
      'projetazzoApp.controllers.MainCtrl',
      'projetazzoApp.controllers.AboutCtrl',
      'projetazzoApp.services.MyService',
      /*angJSDeps*/
      'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate'
    ])
    .config(function($routeProvider) {
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
});