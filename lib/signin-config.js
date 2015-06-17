'use strict';

var defaults = require('lodash/object/defaults');

var defaultConfig = {
  widgetUrl: '/signin',
  signOutUrl: '/',
  popupMode: false,
  loginFirst: false,
  cookieName: 'gtoken'
};

function signinConfig(opts){
  var dirtyConfig = {
    widgetUrl: opts.widgetUrl,
    signOutUrl: opts.signOutUrl,
    popupMode: opts.popupMode,
    loginFirst: opts.loginFirst,
    cookieName: opts.cookieName
  };

  var cleanConfig = {
    widgetUrl: opts.signinUrl,
    signOutUrl: opts.signoutUrl,
    popupMode: opts.popup,
    loginFirst: opts.forceSignin,
    cookieName: opts.cookie
  };

  var config = defaults(dirtyConfig, cleanConfig, defaultConfig);

  return config;
}

module.exports = signinConfig;
