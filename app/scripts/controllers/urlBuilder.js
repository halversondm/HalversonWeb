/**
 * Created by Daniel on 11/1/2015.
 */

'use strict';
angular.module('halversonWebApp').controller('urlBuilderController', ['$scope', function ($scope) {

  $scope.queries = [];

  $scope.query = {};

  $scope.assembledUrl = "";
  $scope.baseUrl = "";

  $scope.addQuery = function () {
    var query = angular.copy($scope.query);
    $scope.queries.push(query);
    $scope.query = {};

  };

  $scope.assemble = function () {
    var assembled = angular.copy($scope.baseUrl) + "?";
    var queries = angular.copy($scope.queries);
    var count = 0;

    for (var i = 0; i < queries.length; i++) {
      count += 1;
      assembled += queries[i].key + "=" + queries[i].value;
      setCookie(queries[i].key, queries[i].value);
      if (count < queries.length) {
        assembled += "&";
      }
    }
    setCookie("baseUrl", $scope.baseUrl);
    $scope.assembledUrl = assembled;
  };

  $scope.launch = function () {
    var myWindow = window.open("", "MsgWindow", "toolbar=yes, scrollbars=yes, resizable=yes, width=1024, height=768");
    myWindow.document.write('<html><head><meta http-equiv="X-UA-Compatible" content="IE=edge"></head></head><body><iframe src="' + $scope.assembledUrl + '" width="100%" height="100%" /></body></html>"');
  };

  function setCookie(cname, value) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + value + "; " + expires;
  }

}]);
