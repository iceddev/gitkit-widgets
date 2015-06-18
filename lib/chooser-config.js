'use strict';

var defaults = require('lodash/object/defaults');

var defaultConfig = {
  apiKey: '',
  signInSuccessUrl: '/',
  idps: ['google'],
  oobActionUrl: '/email',
  siteName: '',
  cookieName: 'gtoken'
  // Optional config
  // tosUrl: '',
  // callbackUrl: '',
  // acUiConfig: {
  //   title: '',
  //   favicon: '',
  //   branding: ''
  // },
  // ajaxSender: function(){}
};

function chooserConfig(opts){
  opts = opts || {};

  var dirtyConfig = {
    apiKey: opts.apiKey,
    signInSuccessUrl: opts.signInSuccessUrl,
    idps: opts.idps,
    oobActionUrl: opts.oobActionUrl,
    siteName: opts.siteName,
    tosUrl: opts.tosUrl,
    // Doesn't exist?
    // callbackUrl: opts.callbackUrl,
    cookieName: opts.cookieName,
    acUiConfig: opts.acUiConfig,
    ajaxSender: opts.ajaxSender
  };

  var cleanConfig = {
    // apiKey is nice enough
    signInSuccessUrl: opts.successUrl,
    idps: opts.providers,
    oobActionUrl: opts.emailUrl,
    siteName: opts.site,
    tosUrl: opts.termsUrl,
    cookieName: opts.cookie,
    // TODO: handle acUiConfig
    ajaxSender: opts.ajax
  };

  var config = defaults(dirtyConfig, cleanConfig, defaultConfig);

  return config;
}

module.exports = chooserConfig;
