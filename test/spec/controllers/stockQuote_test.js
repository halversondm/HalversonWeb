/**
 * Created by Daniel on 10/7/2015.

'use strict';

describe('Stock Quote Controller Tests', function () {

  beforeEach(module('halversonWebApp'));

  var stockQuoteCtrl;
  var stockQuoteService;
  var scope;
  var stock;
  var httpBackend;

  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    stockQuoteCtrl = $controller('stockQuoteController', {
      $scope: scope
    });
  }));

  beforeEach(inject(function ($injector) {
    stock.StockSymbol = "MSFT";
    stockQuoteService = $injector.get('StockQuoteRetrieval');
    spyOn(stockQuoteService, 'call').and.returnValue(JSON.stringify(stock));
  }));

  it('should have a MSFT in the array', function() {
    scope.stockInput = "MSFT";
    scope.submit();
    expect(scope.stocks[0].StockSymbol).toEqual("MSFT");

  });

});
*/
