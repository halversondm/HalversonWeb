/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";
import angular from "angular";
import uiRouter from "angular-ui-router";
import routing from "./apps.routes";
import AbcController from "./abc.controller";
import AbcModalController from "./abcModal.controller";
import Base64Controller from "./base64.controller.js";
import uibs from "angular-ui-bootstrap";
import discountCalculator from "../../services/discountCalc.service.js";
import DiscountCalculatorController from "./discountCalculator.controller";
import rpslsService from "../../services/game.service.js";
import RpslsController from "./rpsls.controller.js";
import GradesController from "./grades.controller.js";
import StockQuoteController from "./stockQuote.controller.js";
import stockQuoteService from "../../services/stockQuote.service.js";
import UrlBuilderController from "./urlBuilder.controller.js";
import checkboxSeries from "../../directives/checkboxSeries.directive.js";
export default angular.module("app.apps", [uiRouter, uibs, discountCalculator, rpslsService, stockQuoteService, checkboxSeries])
  .config(routing)
  .controller("AbcController", AbcController)
  .controller("Base64Controller", Base64Controller)
  .controller("DiscountCalculatorController", DiscountCalculatorController)
  .controller("RpslsController", RpslsController)
  .controller("GradesController", GradesController)
  .controller("StockQuoteController", StockQuoteController)
  .controller("UrlBuilderController", UrlBuilderController)
  .controller("AbcModalController", AbcModalController)
  .name;
