'use strict';

function compute_median(collection) {
  //在这里写入代码
  collection.sort(function (a,b) {
    return a-b;
  });
  if(collection.length%2==0)
  {
    return (collection[collection.length/2]+collection[collection.length/2-1])/2;
  }
  else {
    return collection[(collection.length-1)/2];
  }
}

module.exports = compute_median;


