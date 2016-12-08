angular.module("personService", ['myApp.factories'])
	.controller("personController", function ($scope, $routeParams, AppFactory){
	  	var dateId = $routeParams.DateID;
	  	var personId = $routeParams.PersonID;

	  	$scope.filterBy =  {};
	  	$scope.filterBy.person = personId;
	  	$scope.filterBy.date = dateId;
	  	$scope.editMode = false;


	  	AppFactory.getDates().then( function(data){ 
			var dates = data.data;
			for(var i=0; i < dates.length; i++) {
		        if(dates[i].id == dateId) {
		          $scope.date = dates[i];
		        }
		    }
		});

	  	AppFactory.getPersons().then( function(data){ 
			var persons = data.data;
			for(var i=0; i < persons.length; i++) {
		        if(persons[i].id == personId) {
		          $scope.person = persons[i];
		        }
		    }
		});

	  	var presents = [];
	  	AppFactory.getPresents().then( function(data){ 
			$scope.presents = data.data;
		});

		$scope.presentNameById = function(presentId){
			for(var i=0; i < presents.length; i++) {
				if(presents[i].id == presentId) {
			        return presents[i].name;
			    }
			}
		}
	});