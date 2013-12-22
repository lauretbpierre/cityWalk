'use strict';

/* CityWalk module */

var cityWalkApp = angular.module('cityWalkApp', [
        'ngRoute',
        'cityWalkControllers',
        'cityWalkServices'
    ]);
    
cityWalkApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/city', {
                templateUrl: 'partials/city-list.html',
                controller: 'CityListCtrl'
            }).
            when('/city/:cityId', {
                templateUrl: 'partials/city-detail.html',
                controller: 'CityDetailCtrl'
            }).
            otherwise({
                redirectTo: '/city'
            });
}]);