/**
 * Created by Daniel on 1/24/2016.
 */
"use strict";
routing.$inject = ["$urlRouterProvider", "$locationProvider"];
/**
 * Main router for the whole application.
 *
 * @param {object} $urlRouterProvider A URL Router Provider
 * @param {object} $locationProvider A Location Provider
 */
export default function routing($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise("/");
}
