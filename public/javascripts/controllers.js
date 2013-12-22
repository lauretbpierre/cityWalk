'use strict';

/* Controllers */

var cityWalkControllers = angular.module('cityWalkControllers', []);

cityWalkControllers.controller('CityListCtrl', ['$scope', 'City',
    function ($scope, City) {
        $scope.cities = City.query();
}]);

cityWalkControllers.controller('CityDetailCtrl', ['$scope', '$routeParams', 'City',
    function ($scope, $routeParams, City) {
        $scope.city = City.get({cityId: $routeParams.cityId}, function (city) {
            
        });
}]);