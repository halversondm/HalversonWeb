/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";

import apps from "./apps.html";
import abc from "./abc.html";
import base64 from "./base64.html";
import rpsls from "./rpsls.html";
import discountCalculator from "./discountCalculator.html";
import stockQuote from "./stockQuote.html";
import grades from "./grades.html";
import urlBuilder from "./urlBuilder.html";

routes.$inject = ["$stateProvider"];
/**
 * Routing for this feature.
 *
 * @param {object} $stateProvider A state provider
 */
function routes($stateProvider) {
  $stateProvider.state("apps", {
    url: "/apps",
    template: apps
  });
  $stateProvider.state("abc", {
    url: "/abc",
    template: abc,
    controller: "AbcController",
    controllerAs: "abc"
  });
  $stateProvider.state("base64", {
    url: "/base64",
    template: base64,
    controller: "Base64Controller",
    controllerAs: "base64"
  });
  $stateProvider.state("rpsls", {
    url: "/rpsls",
    template: rpsls,
    controller: "RpslsController",
    controllerAs: "rpsls"
  });
  $stateProvider.state("discountCalculator", {
    url: "/discountCalculator",
    template: discountCalculator,
    controller: "DiscountCalculatorController",
    controllerAs: "discountCalc"
  });
  $stateProvider.state("stockQuote", {
    url: "/stockQuote",
    template: stockQuote,
    controller: "StockQuoteController",
    controllerAs: "stockQuote"
  });
  $stateProvider.state("grades", {
    url: "/grades",
    template: grades,
    controller: "GradesController",
    controllerAs: "grades"
  });
  $stateProvider.state("urlBuilder", {
    url: "/urlBuilder",
    template: urlBuilder,
    controller: "UrlBuilderController",
    controllerAs: "urlBuilder"
  });
}

export default routes;
