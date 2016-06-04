/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";
routes.$inject = ["$stateProvider"];
/**
 * Routing for this feature.
 *
 * @param {object} $stateProvider A state provider
 */
export default function routes($stateProvider) {
  $stateProvider.state("apps", {
    url: "/apps",
    template: require("./apps.html")
  });
  $stateProvider.state("abc", {
    url: "/abc",
    template: require("./abc.html"),
    controller: "AbcController",
    controllerAs: "abc"
  });
  $stateProvider.state("base64", {
    url: "/base64",
    template: require("./base64.html"),
    controller: "Base64Controller",
    controllerAs: "base64"
  });
  $stateProvider.state("rpsls", {
    url: "/rpsls",
    template: require("./rpsls.html"),
    controller: "RpslsController",
    controllerAs: "rpsls"
  });
  $stateProvider.state("discountCalculator", {
    url: "/discountCalculator",
    template: require("./discountCalculator.html"),
    controller: "DiscountCalculatorController",
    controllerAs: "discountCalc"
  });
  $stateProvider.state("stockQuote", {
    url: "/stockQuote",
    template: require("./stockQuote.html"),
    controller: "StockQuoteController",
    controllerAs: "stockQuote"
  });
  $stateProvider.state("grades", {
    url: "/grades",
    template: require("./grades.html"),
    controller: "GradesController",
    controllerAs: "grades"
  });
  $stateProvider.state("urlBuilder", {
    url: "/urlBuilder",
    template: require("./urlBuilder.html"),
    controller: "UrlBuilderController",
    controllerAs: "urlBuilder"
  });
}
