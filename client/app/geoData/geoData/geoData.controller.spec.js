'use strict';

describe('Controller: GeoDataCtrl', function () {

  // load the controller's module
  beforeEach(module('dangerzoneApp'));

  var GeoDataCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeoDataCtrl = $controller('GeoDataCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
