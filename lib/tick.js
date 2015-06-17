'use strict';

function tick(cb){
  return function(){
    process.nextTick(function(){
      cb.apply(null, arguments);
    });
  };
}

module.exports = tick;
