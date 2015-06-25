'use strict';

var cssLoader = require('loads-css');

var loaded = false;
var cssUrl = 'https://www.gstatic.com/authtoolkit/css/gitkit.css';

function loadCss(cb){
  if(loaded){
    cb();
    return;
  }

  cssLoader(cssUrl, function(){
    loaded = true;
    process.nextTick(cb);
  });
}

module.exports = loadCss;
