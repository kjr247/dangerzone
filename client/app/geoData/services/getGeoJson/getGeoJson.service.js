'use strict';

angular.module('dangerzoneApp')
  .factory('getGeoJson', ['$http',
    function ($http) {
        return {
            getGeoJson: function () {
                var urlBase = '/customsearch',
                    callbackName = 'JSON_CALLBACK',
                    url = urlBase + '/' + enddate + '/' lat + '/' + long + '/' + 'startdate' + '?callback=' + callbackName;

                return $http.jsonp(url);
            }
        };
    }
  });
