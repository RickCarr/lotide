const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😎 Assertion Passed 😎:\n \x1b[32m ${actual}  === ${expected} \x1b[0m`) :
  console.log(`😞 Assertion Failed 😞:\n \x1b[31m ${actual} !== \x1b[32m ${expected} \x1b[0m`);
};

module.exports = assertEqual;
