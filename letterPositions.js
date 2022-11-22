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
    console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[1m\x1b[5m\x1b[32m ${arr2} \x1b[0m`);
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
  return results;
};
const actual = (letterPositions("hello"));
assertArraysEqual(actual["h"], [0]);
assertArraysEqual(actual["e"], [1]);
assertArraysEqual(actual["l"], [2, 3]);
assertArraysEqual(actual["o"], [4]);

module.exports = letterPositions;
