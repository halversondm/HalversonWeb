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
export default angular.module("app.auto", [uiRouter, uibs, photoGallery])
  .config(routing)
  .controller("PhotoGalleryController", PhotoGalleryController)
  .controller("PhotoGalleryModalController", PhotoGalleryModalController)
  .name;
