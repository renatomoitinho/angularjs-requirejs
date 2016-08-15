define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name projetazzoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the projetazzoApp
   */
  angular.module('projetazzoApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', ['$scope', 'MyService', function($scope, myService) {
      myService.sample().then(function(evt) {
        $scope.awesomeThings = evt.awesomeThings;
      });

    }]);
});