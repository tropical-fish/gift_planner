angular.module("presentService", ['myApp.factories'])
	.controller("presentController", function ($scope, $routeParams, AppFactory){
	  	var dateId = $routeParams.DateID;
	  	var personId = $routeParams.PersonID;
	  	var dateId = $routeParams.DateID;
	  	$scope.editMode = false;
	  	AppFactory.getDates().then( function(data){ 
			var dates = data.data;
			for(var i=0, l=dates.length; i < l; i++) {
		        if(dates[i].id == dateId) {
		          $scope.date = dates[i];
		        }
		    }
		});

	  	AppFactory.getPersons().then( function(data){ 
			var persons = data.data;
			for(var i=0, l=persons.length; i < l; i++) {
		        if(persons[i].id == personId) {
		          $scope.person = persons[i];
		        }
		    }
		});

	  	var presents = [];
	  	AppFactory.getPresents().then( function(data){ 
			var dates = data.data;
		});

	  });