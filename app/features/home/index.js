/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";
import angular from "angular";
import uiRouter from "angular-ui-router";
import routing from "./home.routes";
import BlogController from "./blog.controller.js";
export default angular.module("app.home", [uiRouter])
  .config(routing)
  .controller("BlogController", BlogController)
  .name;
