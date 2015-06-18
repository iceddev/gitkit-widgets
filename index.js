'use strict';

var loadCss = require('./lib/load-css');
var loadScript = require('./lib/load-script');
var hideElements = require('./lib/hide-elements');
var showElements = require('./lib/show-elements');
var loginConfig = require('./lib/login-config');
var loginButtons = require('./lib/login-buttons');
var loginChoosers = require('./lib/login-choosers');
var chooserConfig = require('./lib/chooser-config');
var optionalCallback = require('./lib/optional-callback');

function login(selector, opts, cb){

  cb = optionalCallback(cb);

  var config = loginConfig(opts);

  var elements = document.querySelectorAll(selector);

  hideElements(elements);

  function done(){
    showElements(elements);
    cb();
  }

  loadScript(function(err){
    if(err){
      cb(err);
      return;
    }

    // need to call this function right away to bind to window `load` event
    loginButtons(elements, config);
    // load the css after we wire up the JS because it doesn't prolong the `load` event
    loadCss(done);
  });
}

function chooser(selector, opts, payload, cb){

  cb = optionalCallback(cb);

  var config = chooserConfig(opts);

  var elements = document.querySelectorAll(selector);

  hideElements(elements);

  function done(){
    showElements(elements);
    cb();
  }

  loadScript(function(err){
    if(err){
      cb(err);
      return;
    }

    // need to call this function right away to bind to window `load` event
    loginChoosers(elements, config, payload);
    // load the css after we wire up the JS because it doesn't prolong the `load` event
    loadCss(done);
  });
}

module.exports = {
  login: login,
  chooser: chooser
};
