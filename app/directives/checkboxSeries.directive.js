/**
 * Created by Daniel on 2/7/2016.
 */
"use strict";

import angular from "angular";

class CheckboxSeriesDirective {
  constructor() {
    this.restrict = "E";
    this.scope = {
      labels: "=", selected: "=",
      labelOtherText: "=", otherLabelPlaceholder: "@"
    };
    this.template = require("./checkboxSeries.html");
  }

  link(scope) {
    scope.otherLabelDisabled = true;
    scope.toggleSelected = function(label) {
      var idx = scope.selected.indexOf(label);
      if (idx > -1) {
        scope.selected.splice(idx, 1);
      } else {
        scope.selected.push(label);
      }
    };

    scope.otherLabelText = function() {
      scope.toggleSelected("Other");
      if (scope.otherLabelDisabled) {
        scope.otherLabelDisabled = false;
      } else {
        scope.otherLabelDisabled = true;
        scope.labelOtherText = "";
      }
    };
  }

  static directiveFactory() {
    CheckboxSeriesDirective.instance = new CheckboxSeriesDirective();
    return CheckboxSeriesDirective.instance;
  }
}

export default angular
  .module("directives.checkboxSeries", [])
  .directive("checkboxSeries", CheckboxSeriesDirective.directiveFactory)
  .name;
