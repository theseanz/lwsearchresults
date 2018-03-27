'use strict';
var app = angular.module('searchResults');

app.component('pagination', {
  templateUrl: 'components/pagination/pagination.html',
  controller: 'paginationController',
  bindings: {
    limit: '<',
    offset: '<',
    numResults: '<',
    changePage: '='
  }
});

app.controller('paginationController', function() {
  this.prevDisabled = true;
  this.nextDisabled = true;

  this.numPages = Math.floor(this.numResults/this.limit);
  if (this.numResults % this.limit > 0)  this.numPages++;
  this.pages = [];
  for (var ii = 1; ii<=this.numPages; ii++){
    this.pages.push(ii);
  }

  this.$onChanges = function () {
    this.prevDisabled = (this.offset === 0);
    this.nextDisabled = ((this.offset + this.limit) > this.numResults);
  }
});