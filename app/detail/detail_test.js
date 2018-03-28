'use strict';

describe('DetailController', function () {
  beforeEach(module('searchResults'));
  var controller, scope;
  var iTunesService

  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    controller = $controller('DetailCtrl', {$scope: scope});
    iTunesService = $injector.get('iTunesService');
  }));

  describe('iTunesService', function () {
    it('should exist', function () {
      expect(iTunesService).to.exist;
    });

    it('should search iTunes', function () {
      var iTunesSearch = sinon.spy(iTunesService, 'search');
      iTunesSearch();
      assert(iTunesSearch.calledOnce);
    });

  })
});
