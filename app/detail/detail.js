'use strict';

angular.module('searchResults.detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail', {
    templateUrl: 'detail/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$scope', '$routeParams', 'iTunesService', function($scope, $routeParams, iTunesService) {
  if (Object.keys(iTunesService.getResults()).length === 0) {
    console.log('getting weezer');
    iTunesService.search('weezer').then(function(){
      $scope.itemDetails = iTunesService.getResults().results[$routeParams.itemId];
      console.log($scope.itemDetails);
    })
  } else {
    $scope.itemDetails = iTunesService.getResults().results[$routeParams.itemId];
  }
}]);