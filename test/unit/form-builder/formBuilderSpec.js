'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('formBuilder');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('formBuilder.config')).to.be.ok;
  });

  

  
  it('should load directives module', function() {
    expect(hasModule('formBuilder.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('formBuilder.services')).to.be.ok;
  });
  

});