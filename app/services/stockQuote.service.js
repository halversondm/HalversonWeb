/**
 * Created by Daniel on 1/26/2016.
 */
'use strict';

import angular from 'angular';

class StockQuoteService {

    constructor($http) {
        this.http = $http;
    }

    call(stockSymbol) {
        var url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?jsoncallback=JSON_CALLBACK&symbol=" + stockSymbol;
        return this.http.jsonp(url).then(function (response) {
            return response.data;
        }, function () {
            var message = {};
            message.Message = "The Stock Quote service could not retrieve your stock information at this time. Please try again later.";
            return message;
        });
    }

}

StockQuoteService.$inject = ['$http'];

export default angular.module('services.stockQuote', [])
    .service('stockQuoteService', StockQuoteService)
    .name;