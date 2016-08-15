define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name projetazzoApp.controller:UserCtrl
   * @description
   * # UserCtrl
   * Controller of the projetazzoApp
   */
  angular.module('projetazzoApp.controllers.UserCtrl', [])
    .controller('UserCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
