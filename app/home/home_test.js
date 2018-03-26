'use strict';

describe('searchResults.home module', function() {

  beforeEach(module('searchResults.home',  ['$scope', '$routeParams', 'iTunesService']));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('HomeCtrl');
      expect(HomeCtrl).toBeDefined();
    }));

  });
});