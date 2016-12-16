angular.module('editInPlaceDirective',[])
	.directive ("editInPlace", function(){
		return {
			scope: {value: '='},
	    	template: '<span ng-bind="value" ng-hide="editing"></span><input class="form-control" ng-show="editing" ng-model="value"></input> <button class="btn btn-info btn-sm" type="button" ng-click="edit()"><span class="glyphicon glyphicon-pencil" ng-hide="editing"></span><span class="glyphicon glyphicon-ok" ng-show="editing"></span></button>',
	   		link: function ( $scope, element, attrs ) {
		      var inputElement = angular.element( element.children()[1] );
	          $scope.editing = false;
		      $scope.edit = function () {
		        if ($scope.editing){
		          $scope.editing = false;
		        } else {
		          $scope.editing = true; 
		          //inputElement[0].focus();
	        	}
	      	  };
	    	}
	  	};
	});