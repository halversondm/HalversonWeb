/**
 * Created by Daniel on 9/4/2015.
 */


'use strict';
describe('Base64 Suite', function () {

  beforeEach(module('halversonWebApp'));

  var decoder;
  var encoder;
  var scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    decoder = $controller('decoder', {
      $scope: scope
    });
    encoder = $controller('encoder', {
      $scope: scope
    });
  }));

  describe('controller tests', function () {

    it('should decode', function () {
      scope.decodeInput = 'anBtYzEyMzQ=';
      scope.goDecode();

      expect(scope.decodeOutput).toEqual('jpmc1234');
    });

    it('should encode', function () {
      scope.encodeInput = 'jpmc1234';
      scope.goEncode();

      expect(scope.encodeOutput).toEqual('anBtYzEyMzQ=');
    });
  });

});
