angular.module('mainService', ['myApp.factories'])
  .controller("mainController", function ($scope, AppFactory){
  	AppFactory.getDates().then( function(data){
		$scope.dates = data.data;
		}, function(){ 
	});
  })