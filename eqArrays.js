const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed 😎: ${actual} === ${expected}`);
  } else {
    console.log(`😞 Assertion Failed 😞: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(arrayA, arrayB) {
  let result = true;  //set default to true
  if (arrayA.length !== arrayB.length) return false; //fails if arrays are diff lengths
  for (let i = 0; i < arrayA.length; i++) { //loops index for aligned length
    if (arrayA[i] !== arrayB[i]) return false; //fails if any index of the arrays don't match
  }
  return result; //returns true unless false is returned prior
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);