'use strict';

var scriptLoader = require('load-script');

var loaded = false;
var jsUrl = 'https://www.gstatic.com/authtoolkit/js/gitkit.js';

function loadScript(cb){
  if(loaded){
    cb();
    return;
  }

  // `async` option must be false because gitkit binds to window `load` event
  scriptLoader(jsUrl, { async: false }, function(err){
    if(err){
      cb(err);
      return;
    }

    loaded = true;
    cb();
  });
}

module.exports = loadScript;
