'use strict';

var forEach = require('lodash/collection/each');

function hideElements(elements){
  forEach(elements, function(el){
    el.style.display = 'none';
  });
}

module.exports = hideElements;
