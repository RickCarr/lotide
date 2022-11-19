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

const eqObjects = function(object1, object2) {
  const keyRing1 = Object.keys(object1);
  const keyRing2 = Object.keys(object2);
  if (keyRing1.length !== keyRing2.length) {
    return false;
  }
  for (let key of keyRing1) {
    const key1 = object1[key];
    const key2 = object2[key];
    if (Array.isArray(key1) || Array.isArray(key2)) {
      if (eqArrays(key1, key2) === false) {
        return false;
      }
    } else if (key1 !== key2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const obj1 = inspect(actual);
  const obj2 = inspect(expected);
  eqObjects(actual, expected) ? console.log(`😎 Objects Match!! 😎: \n \x1b[32m ${obj1} === ${obj2} \x1b[0m`) :
    console.log(`😞 Objects Don't Match!! 😞: \n  \x1b[31m ${obj1} !== \x1b[32m ${obj2} \x1b[0m`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(ab, ba); //true
assertObjectsEqual(ab, abc); //false
assertObjectsEqual(cd, dc); //true
assertObjectsEqual(cd, cd2); //false