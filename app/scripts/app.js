'use strict';

/**
 * @ngdoc overview
 * @name halversonWebApp
 * @description
 * # halversonWebApp
 *
 * Main module of the application.
 */
angular
  .module('halversonWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'checklist-model'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/apps', {
        templateUrl: 'views/apps.html'
      })
      .when('/blog', {
        templateUrl: 'views/blogs.html'
      })
      .when('/auto', {
        templateUrl: 'views/cars.html'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html'
      })
      .when('/abc', {
        templateUrl: 'views/abc.html',
        controller: 'abcController',
        controllerAs: 'abc'
      })
      .when('/base64', {
        templateUrl: 'views/base64.html'
      })
      .when('/discountCalculator', {
        templateUrl: 'views/discountCalculator.html'
      })
      .when('/rpsls', {
        templateUrl: 'views/rpsls.html',
        controller: 'rpslsController',
        controllerAs: 'rpsls'
      })
      .when('/stockQuote', {
        templateUrl: 'views/stockQuote.html',
        controller: 'stockQuoteController',
        controllerAs: 'stockQuote'
      })
      .when('/charger', {
        templateUrl: 'views/charger.html'
      })
      .when('/grandPrix', {
        templateUrl: 'views/grandPrix.html'
      })
      .when('/honda', {
        templateUrl: 'views/honda.html'
      })
      .when('/yamaha', {
        templateUrl: 'views/yamaha.html'
      })
      .when('/scanGallery', {
        templateUrl: 'views/scanGallery.html'
      })
      .when('/snapGallery', {
        templateUrl: 'views/snapGallery.html'
      })
      .when('/grades', {
        templateUrl: 'views/grades.html',
        controller: 'gradesController',
        controllerAs: 'grades'
      })
      .when('/urlBuilder', {
        templateUrl: 'views/urlBuilder.html',
        controller: 'urlBuilderController',
        controllerAs: 'urlBulider'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
