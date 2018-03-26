'use strict';

var app = angular.module('searchResults.detail', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}]);

app.controller('DetailCtrl', ['$scope', '$routeParams', 'iTunesService',
  function ($scope, $routeParams, iTunesService) {
    if (Object.keys(iTunesService.getResults()).length === 0) {
      iTunesService.getById($routeParams.itemId).then(function () {
        $scope.itemDetails = iTunesService.getResults();
      });
    } else {
      $scope.itemDetails = iTunesService.getResults().results.filter(function (item) {
        return item.trackId === parseInt($routeParams.itemId);
      })[0];
    }
  }
]);