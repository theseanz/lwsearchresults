'use strict';
var app = angular.module('searchResults', [
  'ngRoute',
  'searchResults.home',
  'searchResults.detail'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
    .when('/home/:searchTerm', {templateUrl: 'home/home.html', controller: 'HomeCtrl' })
    .when('/detail/:itemId', {templateUrl: 'detail/detail.html', controller: 'DetailCtrl' })
    .otherwise({redirectTo: '/home'});
}]);

app.filter('resizeImage', function(){
  return function(input, newSize){
    var output;
    var newFileName = newSize + 'x' + newSize + 'bb.jpg';
    input = input.split('/');
    input.splice(-1,1);
    input.push(newFileName);
    output = input.join('/');
    return output;
  }
});
