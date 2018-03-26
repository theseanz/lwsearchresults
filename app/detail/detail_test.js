'use strict';

describe('searchResults.detail module', function () {
  beforeEach(module('searchResults.detail'));

  it('initialises scope',
    inject(function ($controller, $rootScope) {
      var scope = $rootScope.$new();
      var ctrl = $controller('DetailCtrl',
        {
          $scope: scope
        });
      expect(scope.blah).toBe('blah')
    })
  )
  ;
});