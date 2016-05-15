'use strict';
import angular from "angular";
import "./bootswatch/dist/bootswatch.css";
import "bootstrap/dist/js/bootstrap.js";
import routing from "./main.config";
import ui_router from "angular-ui-router";
import home from "./features/home/";
import auto from "./features/auto/";
import apps from "./features/apps/";
import "./main.css";
import "./mail.php";

angular.module('main', [ui_router, home, auto, apps])
  .config(routing);
