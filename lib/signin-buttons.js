'use strict';

var forEach = require('lodash/collection/each');

function signinButtons(elements, config){
  forEach(elements, function(el){
    window.google.identitytoolkit.signInButton(el, config);
  });
}

module.exports = signinButtons;
