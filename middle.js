const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  for (let i of array) { 
    array.pop();
    array.shift();
  }
  return array;
};

module.exports = middle;
//alt method, with more code.
  //   let center = array.length / 2
  //   if (array.length <= 2) {
  //     return [];
  //   }
  //   if (array.length % 2 === 0) {    
  //     return array.slice(center -1, center + 1);
  //   } else {    
  //     return array.slice(center, center + 1);
  //   }
  // };
