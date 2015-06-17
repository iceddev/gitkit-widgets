'use strict';

var _ = require('lodash');
var expect = require('expect');

var signinConfig = require('../../lib/signin-config');

describe('signin-config', function(){

  var cleanConfig = {
    signinUrl: '/login',
    signoutUrl: '/logout',
    popup: true,
    forceSignin: true,
    cookie: 'clean'
  };

  var dirtyConfig = {
    widgetUrl: '/signin',
    signOutUrl: '/signout',
    popupMode: false,
    loginFirst: false,
    cookieName: 'dirty'
  };

  it('normalizes an options object', function(done){
    var config = signinConfig(cleanConfig);

    var expected = {
      widgetUrl: '/login',
      signOutUrl: '/logout',
      popupMode: true,
      loginFirst: true,
      cookieName: 'clean'
    };

    expect(config).toEqual(expected);
    done();
  });

  it('uses Gitkit properties before clean properties', function(done){
    var config = signinConfig(_.assign({}, cleanConfig, dirtyConfig));

    var expected = {
      widgetUrl: '/signin',
      signOutUrl: '/signout',
      popupMode: false,
      loginFirst: false,
      cookieName: 'dirty'
    };

    expect(config).toEqual(expected);
    done();
  });
});
