const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let index = 0; index < arrayA.length; index++) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const actual = eqArrays(arr1, arr2);
  actual === true ? console.log(`😎 Arrays Match!! 😎: \n \x1b[32m ${arr1} === ${arr2} \x1b[0m`) :
  console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[32m ${arr2} \x1b[0m`);
};

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
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);