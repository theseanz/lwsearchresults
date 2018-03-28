'use strict';

describe('HomeController', function () {
  beforeEach(module('searchResults'));
  var controller, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('HomeCtrl', {$scope: scope});
  }));

  describe('Search function', function() {
    it('should exist', function () {
      assert.isFunction(scope.search);
    });

    it('should run function', function () {
      var iTunes = sinon.spy(scope, 'search');
      iTunes();
      assert(iTunes.calledOnce);
    });

    it('should set variables', function () {
      var iTunes = sinon.spy(scope, 'search');
      iTunes();
      assert(scope.offset === 0);
      assert(scope.limit === 9);
      assert(scope.response === null);
      assert(scope.submitting === true);
    });
  });

  describe('Change Page function', function () {
    it('should exist', function () {
      assert.isFunction(scope.changePage);
    });

    it('should update offset', function () {
      var iTunes = sinon.spy(scope, 'search');
      iTunes();
      /* Mock response object */
      scope.response = {};
      scope.response.resultCount = 50;

      var changePage = sinon.spy(scope, 'changePage');
      scope.changePage('next');

      assert(scope.offset === 9);
    });


  });

});

