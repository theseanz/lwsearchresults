'use strict';

angular.module('searchResults', [
  'ngRoute',
  'searchResults.home',
  'searchResults.detail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
