'use strict';

var loadCss = require('loads-css');
var loadScript = require('load-script');

var jsUrl = '//www.gstatic.com/authtoolkit/js/gitkit.js';
var cssUrl = '//www.gstatic.com/authtoolkit/css/gitkit.css';

var tick = require('./lib/tick');
var hideElements = require('./lib/hide-elements');
var showElements = require('./lib/show-elements');
var loginConfig = require('./lib/login-config');
var loginButtons = require('./lib/login-buttons');
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

  // `async` option must be false because gitkit binds to window `load` event
  loadScript(jsUrl, { async: false }, function(err){
    if(err){
      cb(err);
      return;
    }

    // need to call this function right away to bind to window `load` event
    loginButtons(elements, config);
    // load the css after we wire up the JS because it doesn't prolong the `load` event
    loadCss(cssUrl, tick(done));
  });
}

module.exports = {
  login: login
};
