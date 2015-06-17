'use strict';

function optionalCallback(cb){
  return function(){
    if(typeof cb === 'function'){
      cb.apply(null, arguments);
    }
  };
}

module.exports = optionalCallback;
