'use strict';
var app = angular.module('searchResults');

app.component('movieCard', {
  templateUrl: 'components/cards/movie-card.html',
  controller: 'movieCardController',
  bindings: {
    movie: '<'
  }
});

app.controller('movieCardController', function() {
});