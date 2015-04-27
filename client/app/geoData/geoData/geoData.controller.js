'use strict';

angular.module('dangerzoneApp')
  .controller('GeoDataController', ['$scope', 'Global', 'getGeoJson' function ($scope, Global, getGeoJson) {
  	$scope.global = Global;
    $scope.message = 'Hello';
  	$scope.customSearchResults = {};   

  	//init
	$scope.lat = '';    
	$scope.long = '';    
	$scope.startdate = '';    
	$scope.enddate = '';    

	//trim the extra white space from all parameters
	$scope.lat = $scope.search_term.trim();
	$scope.longit = $scope.search_term.trim();
	$scope.startDate = $scope.search_term.trim();
	$scope.endDate = $scope.search_term.trim();

  	getGeoJson.getGeoJson(/*$scope.lat, $scope.longit, $scope.startDate, $scope.endDate*/)
        .then(function (results) {
            $scope.customSearchResults = results.data.items;
        });
  }]);
