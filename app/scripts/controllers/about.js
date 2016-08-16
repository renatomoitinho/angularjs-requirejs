define(['angular'], function(angular) {
  'use strict';

  function sampleSuccess(data){
    this.scope.awesomeThings = data.awesomeThings
  }
  
  /**
   * @ngdoc function
   * @name projetazzoApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the projetazzoApp
   */
  angular.module('projetazzoApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', ['$scope', 'MyService', function($scope, myService) {
      
      myService.sample().then(sampleSuccess.bind({scope: $scope}));

    }]);
});