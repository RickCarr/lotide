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
  actual === true ? console.log(`😎 Arrays Match!! 😎: \n \x1b[32m ${arr1} === ${arr2} \x1b[0m`) : console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[32m ${arr2} \x1b[0m`);
};

const takeUntil = function(array, callback) {
  let took = [];
  for (let item = 0; item < array.length; item++) {
    if (callback(array[item]) === false) {
      took.push(array[item]);
    } else {
      return took;

    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(results2, ['I\'ve', 'never', 'been', 'to', 'Hollywood']); // to show fail.