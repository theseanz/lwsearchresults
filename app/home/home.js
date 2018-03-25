'use strict';

angular.module('searchResults.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.submitting = false;

  $scope.search = function() {
    $scope.offset = 0;
    $scope.limit = 9;
    $scope.response = null;
    $scope.submitting = true;

    $http.get('https://itunes.apple.com/search?term=' + $scope.searchText)
  .then(function successCallback(response) {
    $scope.submitting = false;
    $scope.response = response.data;
    }, function error(response) {
      console.log('error:', response);
    });
  };

  $scope.changePage = function(page) {
    switch (page) {
      case 'next':
        if ($scope.offset + $scope.limit > $scope.response.resultCount) {
          return false;
        }  else {
          $scope.offset += $scope.limit;
        }
        break;
      case 'previous':
        if ($scope.offset === 0) {
          return false;
        } else if ($scope.offset < 0) {
          $scope.offset = 0;
        } else {
          $scope.offset -= $scope.limit;
        }
        break;
      default:
        $scope.offset = ($scope.limit * page)
    }
  }

}]);