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
  actual === true ? console.log(`😎 Arrays Match!! 😎: \n \x1b[32m" ${arr1} " === ${arr2} \x1b[0m`) :console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[32m ${arr2} \x1b[0m`);
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
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]) , ["1", "2"]);
