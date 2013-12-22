'use strict'

var cityWalkServices = angular.module('cityWalkServices', ['ngResource']);

cityWalkServices.factory('City', ['$resource', function ($resource) {
    return $resource('cities/:cityId', {}, {
        query: {method: 'GET', params: {cityId: 'cities'}, isArray: true}
    });
}]);