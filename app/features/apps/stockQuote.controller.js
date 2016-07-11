/**
 * Created by Daniel on 1/26/2016.
 */
"use strict";

class StockQuoteController {

  constructor(stockQuoteService) {
    this.stockQuoteService = stockQuoteService;
    this.stockList = ["MSFT", "AAPL", "JPM", "AMZN", "T", "F"];
    this.stocks = [];
    this.stockInput = "";
    this.init();
  }

  init() {
    for (var i = 0; i < this.stockList.length; i++) {
      this.makeCall(this.stockList[i]);
    }
  }

  makeCall(stockSymbol) {
    this.stockQuoteService.call(stockSymbol).then(
      data => this.stocks.push(data));
  }

  submit() {
    this.stockList.push(this.stockInput);
    this.makeCall(this.stockInput);
    this.stockInput = "";
  }
}

StockQuoteController.$inject = ["stockQuoteService"];

export default StockQuoteController;
