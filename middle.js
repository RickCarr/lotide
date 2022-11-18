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
  actual === true ? console.log(`😎 Arrays Match!! 😎: \n \x1b[32m ${arr1} === ${arr2} \x1b[0m`) :console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[32m ${arr2} \x1b[0m`);
};

const middle = function(array) {
  let newArray = [];
  if (array.length < 2) {
    return newArray;
  }
  for (let arr of array) {
    newArray.push(arr);
  }
  for (let i = 0; i < newArray.length; i++) {
    newArray.pop();
    newArray.shift();
  }
  return newArray;
};
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual((middle([1,2,3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);