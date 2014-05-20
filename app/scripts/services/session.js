'use strict';

angular.module('thousandlivesApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
