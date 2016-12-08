var app = angular.module('myApp.factories', []);

app.factory('AppFactory', ['$http', function($http) {
  return {
    getDates: function () {
      return $http.get('content/dates.json');
    },
    getPersons: function () {
      return $http.get('content/persons.json');
    },
    getPresents: function () {
      return $http.get('content/presents.json');
    }
  };
}]);
