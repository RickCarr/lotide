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

const without = function(source, itemsToRemove) {
  const result = [];
  for (let x = 0; x < source.length; x++) {
    let match = false;
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (source[x] === itemsToRemove[i]) {
        match = true;
      }
    }
    if (match === false) {
      result.push(source[x]);
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(["this", "is", "a", "test"], ["is", "a"]), ["this", "test"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) , ["1", "2"])
