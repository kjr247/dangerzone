'use strict';

describe('Service: getGeoJson', function () {

  // load the service's module
  beforeEach(module('dangerzoneApp'));

  // instantiate service
  var getGeoJson;
  beforeEach(inject(function (_getGeoJson_) {
    getGeoJson = _getGeoJson_;
  }));

  it('should do something', function () {
    expect(!!getGeoJson).toBe(true);
  });

});
