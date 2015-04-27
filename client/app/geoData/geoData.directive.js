'use strict';

angular.module('dangerzoneApp')
    .directive('geoData', function () {
    	return {
			templateUrl: 'app/geoData/geoData.html',
			restrict: 'EA',
			link: function (scope, element, attrs) {
			}
    	};
  });