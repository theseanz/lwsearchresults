'use strict';
var app = angular.module('searchResults');

app.component('musicCard', {
  templateUrl: 'components/cards/music-card.html',
  controller: 'musicCardController',
  bindings: {
    song: '<'
  }
});

app.controller('musicCardController', function() {
});