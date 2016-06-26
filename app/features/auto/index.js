/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";

import angular from "angular";
import uiRouter from "angular-ui-router";
import routing from "./auto.routes";
import uibs from "angular-ui-bootstrap";
import PhotoGalleryController from "./photoGallery.controller.js";
import PhotoGalleryModalController from "./photoGalleryModal.controller.js";
import photoGallery from "../../directives/photoGallery.directive.js";

const auto = angular
  .module("appAuto", [uiRouter, uibs, photoGallery])
  .controller("PhotoGalleryController", PhotoGalleryController)
  .controller("PhotoGalleryModalController", PhotoGalleryModalController)
  .config(routing)
  .name;

export default auto;
