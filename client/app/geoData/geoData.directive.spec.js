'use strict';

describe('Directive: geoData', function () {

  // load the directive's module and view
  beforeEach(module('dangerzoneApp'));
  beforeEach(module('app/geoData/geoData.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<geo-data></geo-data>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the geoData directive');
  }));
});