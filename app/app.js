"use strict";
console.log("app.js"); 

// An Angular application module. Inject ngRoute into your applcation.
var app = angular.module("HighwayApp", ['ngRoute']);

	app.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/brp', {
	        templateUrl: 'partials/highway.html',
	        controller: 'brpControl'
	      })
	      .when('/ptp', {
				templateUrl: 'partials/highway.html',
				controller: 'ptpControl'
				}) ;
	  }
]);