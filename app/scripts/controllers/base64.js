/**
 * Created by Daniel on 9/4/2015.
 */

'use strict';

angular.module('halversonWebApp')
.controller('encoder', ['$scope', function($scope) {

  $scope.goEncode = function() {
    $scope.encodeOutput = window.btoa($scope.encodeInput);
  };

  $scope.clear = function() {
    $scope.encodeOutput = "";
    $scope.encodeInput = "";
  };
}])
.controller('decoder', ['$scope', function($scope) {

  $scope.goDecode = function() {
    $scope.decodeOutput = window.atob($scope.decodeInput);
  };

  $scope.clear = function() {
    $scope.decodeOutput = "";
    $scope.decodeInput = "";
  };
}]);
