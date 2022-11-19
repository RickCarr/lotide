const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😎 Assertion Passed 😎: \x1b[32m ${actual}  === ${expected} \x1b[0m`) :
  console.log(`😞 Assertion Failed 😞: \x1b[31m ${actual} !== \x1b[32m ${expected} \x1b[0m`);
};

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

//assertions listed below
const apple = "this is an apple";
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual(["banana", 2, apple], ["banana", 2, apple]); //true
assertArraysEqual(["banana", 2, apple], ["banana", 2, "apple"]); //false
assertArraysEqual(["banana", 2, apple], ["banana", 3, "this is an apple"]); //false