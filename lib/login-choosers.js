'use strict';

var forEach = require('lodash/collection/each');

function signinButtons(elements, config, payload){
  forEach(elements, function(el){
    window.google.identitytoolkit.start(el, config, decodeURIComponent(payload));
  });
}

module.exports = signinButtons;
