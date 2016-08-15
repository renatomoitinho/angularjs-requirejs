define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name projetazzoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the projetazzoApp
   */
  angular.module('projetazzoApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
