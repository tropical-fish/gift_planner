'use strict';
var app = angular.module('myApp', [
  'ngRoute', 'dateService', 'mainService', 'personService', 'presentService', 'editInPlaceDirective'
]);
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
   $routeProvider
      .when ("/", {
        templateUrl: "views/main.html",
        controller:'mainController'
      })
      .when ("/date/:DateID", {
        templateUrl: "views/date.html",
        controller:'dateController'
      })
      .when ("/date/:DateID/person/:PersonID", {
        templateUrl: "views/person.html",
        controller:'personController'
      })
      .when ("/present", {
        templateUrl: "views/present.html",
        controller:'presentController'
      })
      .otherwise( {
        templateUrl: "templates/page_not_found.html"
      })

}]);
