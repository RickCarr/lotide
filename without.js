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
    for (let i = 0; i < itemsToRemove.length; i++) {
      if (itemsToRemove[i] !== source[x]) {
        result.push(source[x]);
      }
    }
  }
  return result;
};

const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
// let values = [1, 2, 3];
// assertArraysEqual(values, [1,2,3])
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"] are you in ? yes
// // assertArraysEqual(without([1, 2, 3], [1]) , [1]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) , ["1", "2"])
