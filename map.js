const words = ["hey", "dumb", "tralala", "close", "to", "the", "edit"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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
  actual === true ? console.log(`😎 Arrays Match!! 😎: \n \x1b[32m ${arr1} === ${arr2} \x1b[0m`) : console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[32m ${arr2} \x1b[0m`);
};

const mapped1 = map(words, word => word + "!");
const mapped2 = map(words, word => word + "");
const mapped3 = map(words, word => "Paranoimia");
const mapped4 = map(words, word => (words[3]));


assertArraysEqual(mapped1, ["hey!", "dumb!", "tralala!", "close!", "to!", "the!", "edit!"]);
assertArraysEqual(mapped2, words);
assertArraysEqual(mapped3, ["Paranoimia", "Paranoimia", "Paranoimia", "Paranoimia", "Paranoimia", "Paranoimia", "Paranoimia"]);
assertArraysEqual(mapped4, `${words[4]} ${words[5]} ${words[6]}`); //fails