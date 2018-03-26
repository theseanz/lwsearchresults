'use strict';
var app = angular.module('searchResults');

app.factory('iTunesService', function($http) {
  var results = {};

  function search(searchText) {
    return $http.get('https://itunes.apple.com/search?term=' + searchText)
      .then(function successCallback(response) {
        results = response.data;
      }, function error(response) {
        console.log('error:', response);
      });
  }

  function getById(itemId) {
    return $http.get('https://itunes.apple.com/lookup?id=' + itemId)
      .then(function successCallback(response) {
        results = response.data.results[0];
      }, function error(response) {
        console.log('error:', response);
      });
  }

  function getResults() {
    return results;
  }

  return {
    search: search,
    getById: getById,
    getResults: getResults
  }

});