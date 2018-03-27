'use strict';

describe('DetailController', function () {
  beforeEach(module('searchResults'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('DetailCtrl', function() {
    it('just testing this works', function() {
      var $scope = {};
      var controller = $controller('DetailCtrl', {$scope: $scope});
    })
  })


});