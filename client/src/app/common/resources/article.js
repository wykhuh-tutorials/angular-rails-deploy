angular.module('client')
  .factory('Article', function ($resource) {
    return $resource('api/v1/articles/', {
      update: {
        method: 'PUT'
      }
    });
  });
