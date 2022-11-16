const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed 😎: ${actual} === ${expected}`);
  } else {
    console.log(`😞 Assertion Failed 😞: ${actual} !== ${expected}`);
  }
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
  assertEqual(actual, true);
};

//assertions listed below
const apple = "this is an apple";
assertArraysEqual([1, 2, 3], [1, 2, 3]); //true
assertArraysEqual(["banana", 2, apple], ["banana", 2, apple]); //true
assertArraysEqual(["banana", 2, apple], ["banana", 2, "apple"]); //false
assertArraysEqual(["banana", 2, apple], ["banana", 3, "this is an apple"]); //false

// result === true ? console.log(`😎 Arrays Match!! 😎: \n ${fgGreen} ${arrayA} === ${arrayB} ${reset}`)
// : console.log(`😞 Arrays Don't Match!! 😞: \n ${arrayA} === ${arrayB} ${reset}`);