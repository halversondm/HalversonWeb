/**
 * Created by Daniel on 1/27/2016.
 */
"use strict";
import angular from "angular";
export default class UrlBuilderController {

  constructor() {
    this.queries = [];
    this.query = {};
    this.assembledUrl = "";
    this.baseUrl = "";
  }

  addQuery() {
    var query = angular.copy(this.query);
    this.queries.push(query);
    this.query = {};
  }

  assemble() {
    var assembled = angular.copy(this.baseUrl) + "?";
    var queries = angular.copy(this.queries);
    var count = 0;

    for (var i = 0; i < queries.length; i++) {
      count += 1;
      assembled += queries[i].key + "=" + queries[i].value;
      this.setCookie(queries[i].key, queries[i].value);
      if (count < queries.length) {
        assembled += "&";
      }
    }
    this.setCookie("baseUrl", this.baseUrl);
    this.assembledUrl = assembled;
  }

  launch() {
    var myWindow = window.open("", "MsgWindow", "toolbar=yes, scrollbars=yes, " +
      "resizable=yes, width=1024, height=768");
    myWindow.document.write("<html><head><meta http-equiv=\"X-UA-Compatible\"" +
      " content=\"IE=edge\"></head></head><body><iframe src=\"" + this.assembledUrl + "\" width=\"100%\"" +
      " height=\"100%\" /></body></html>\"");
  }

  setCookie(cname, value) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + value + "; " + expires;
  }
}
