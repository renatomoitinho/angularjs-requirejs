define(['angular'], function(angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name projetazzoApp.MyService
   * @description
   * # MyService
   * Service in the projetazzoApp.
   */
  angular.module('projetazzoApp.services.MyService', [])
    .service('MyService', function($resource, $http, $log, $q, $templateCache) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      // var httpServices = function() {
      //   return $http({
      //     method: 'GET',
      //     url: 'data/:ref.json',
      //     cache: $templateCache
      //   });
      // };

      return {
        sample: function() {
          var deferred = $q.defer();
          $http({
              method: 'GET',
              url: '/data/sample.json',
              cache: $templateCache
            })
            .success(function(data) {
              deferred.resolve(data);
            })
            .error(function(msg, code) {
              deferred.reject(msg);
              $log.error(msg, code);
            });
          return deferred.promise;
        }

      };

    });
});