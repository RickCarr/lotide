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


const letterPositions = function(string) {
  const results = {};
  for (let letter in string) {
    if (string[letter] !== " ") {
      if (results[string[letter]]) {
        results[string[letter]].push(Number(letter));
      } else {
        results[string[letter]] = [Number(letter)];
      }
    }
  }
  console.log(results);
  return results;
};
const actual = (letterPositions("hello"));
assertArraysEqual(actual["h"], [0]);
assertArraysEqual(actual["e"], [1]);
assertArraysEqual(actual["l"], [2, 3]);
assertArraysEqual(actual["o"], [4]);

