const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  const actual = eqArrays(arr1, arr2);
  actual === true ? console.log(`😎 Arrays Match!! 😎: \n  \x1b[1m\x1b[32m ${arr1} === ${arr2} \x1b[0m`) :
    console.log(`😞 Arrays Don't Match!! 😞: \n  \x1b[31m ${arr1} !== \x1b[1m\x1b[5m\x1b[32m${arr2} \x1b[0m`);
};

module.exports = assertArraysEqual;
