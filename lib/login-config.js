'use strict';

var defaults = require('lodash/object/defaults');

var defaultConfig = {
  widgetUrl: '/login',
  signOutUrl: '/',
  popupMode: false,
  cookieName: 'gtoken'
};

function loginConfig(opts){
  opts = opts || {};

  var dirtyConfig = {
    widgetUrl: opts.widgetUrl,
    signOutUrl: opts.signOutUrl,
    popupMode: opts.popupMode,
    cookieName: opts.cookieName
  };

  var cleanConfig = {
    widgetUrl: opts.loginUrl,
    signOutUrl: opts.logoutUrl,
    popupMode: opts.popup,
    cookieName: opts.cookie
  };

  var config = defaults(dirtyConfig, cleanConfig, defaultConfig);

  return config;
}

module.exports = loginConfig;
