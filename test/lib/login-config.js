'use strict';

var _ = require('lodash');
var expect = require('expect');

var loginConfig = require('../../lib/login-config');

describe('login-config', function(){

  var cleanConfig = {
    loginUrl: '/login',
    logoutUrl: '/logout',
    popup: true,
    forceLogin: true,
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
    var config = loginConfig(cleanConfig);

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
    var config = loginConfig(_.assign({}, cleanConfig, dirtyConfig));

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
