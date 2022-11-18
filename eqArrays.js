const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed 😎: \x1b[32m ${actual}  === ${expected} \x1b[0m`);
  } else {
    console.log(`😞 Assertion Failed 😞: \x1b[31m ${actual}  !== \x1b[32m ${expected} \x1b[0m`);
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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);//true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); //false