'use strict';

angular.module('searchResults', [
  'ngRoute',
  'searchResults.home',
  'searchResults.detail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/home/:searchTerm', {templateUrl: 'home/home.html', controller: 'HomeCtrl' })
    .when('/detail/:itemId', {templateUrl: 'detail/detail.html', controller: 'DetailCtrl' })
    .otherwise({redirectTo: '/home'});
}]);
