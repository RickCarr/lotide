const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😎 Assertion Passed 😎: \x1b[32m ${actual}  === \x1b[1m ${expected} \x1b[0m`) :
  console.log(`😞 Assertion Failed 😞: \x1b[31m ${actual} !== \x1b[1m\x1b[5m\x1b[32m ${expected} \x1b[0m`);
};

module.exports = assertEqual;
