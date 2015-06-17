'use strict';

var forEach = require('lodash/collection/each');

function showElements(elements){
  forEach(elements, function(el){
    el.style.display = '';
  });
}

module.exports = showElements;
