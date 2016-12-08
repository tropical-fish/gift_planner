angular.module("dateService", ['myApp.factories'])
  	.controller("dateController", function ($scope, $routeParams, AppFactory){
	  	var dateId = $routeParams.DateID;
	  	$scope.editMode = false;
	  	AppFactory.getDates().then( function(data){ 
			var dates = data.data;
			for(var i=0; i < dates.length; i++) {
		        if(dates[i].id == dateId) {
		          $scope.date = dates[i];
		        }
		    }
		});

		var persons = [];
		AppFactory.getPersons().then( function(data){ 
			persons = data.data;
		});

		$scope.personNameById = function(personId){
			for(var i=0; i < persons.length; i++) {
				if(persons[i].id == personId) {
			        return persons[i].name;
			    }
			}
		}

  	});