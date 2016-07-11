/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";
import angular from "angular";
import uiRouter from "angular-ui-router";
import routing from "./home.routes";
import BlogController from "./blog.controller";

const home = angular
  .module("appHome", [uiRouter])
  .controller("BlogController", BlogController)
  .config(routing)
  .name;

export default home;

