'use strict';
var app = angular.module('searchResults.home', ['ngRoute']);

app.controller('HomeCtrl', ['$scope', '$routeParams', 'iTunesService', function ($scope, $routeParams, iTunesService) {
  $scope.submitting = false;


  $scope.search = function () {
    $scope.offset = 0;
    $scope.limit = 9;
    $scope.response = null;
    $scope.submitting = true;

    iTunesService.search($scope.searchText).then(function () {
      $scope.submitting = false;
      $scope.response = iTunesService.getResults();
    })

  };

  $scope.changePage = function (page) {
    switch (page) {
      case 'next':
        if ($scope.offset + $scope.limit > $scope.response.resultCount) {
          return false;
        } else {
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
  };

  if (typeof $routeParams.searchTerm !== 'undefined') {
    $scope.searchText = $routeParams.searchTerm;
    $scope.search();
  }

}]);