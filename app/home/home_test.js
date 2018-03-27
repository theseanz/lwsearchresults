'use strict';

describe('HomeController', function () {
  var HomeCtrl;
  var $controller;
  var $rootScope;

  beforeEach(function() {
    module('searchResults');

    inject(function(_$controller_, _$rootScope_){
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      var scope = $rootScope.$new();
      HomeCtrl = $controller('HomeCtrl', {$scope: scope});
    });
  });

  describe('Home Controller', function() {
    it('should exist', function () {
      assert.exists(HomeCtrl);
    });

    it('should search iTunes', function () {
      assert.exists($scope);
    })

  });

});