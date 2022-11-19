const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`😎 Assertion Passed 😎: \x1b[32m ${actual}  === ${expected} \x1b[0m`) :
    console.log(`😞 Assertion Failed 😞: \x1b[31m ${actual} !== \x1b[32m ${expected} \x1b[0m`);
};
const findKey = function(obj, keyValue) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (keyValue(obj[key])) {
      return key;
    }
  }
};
//test cases
const rapperNames = {
  "Todd Smith": { alias: "LL cool J" },
  "Russell Jones": { alias: "ODB" },
  "Marshall Mathers": { alias: "Eminem" },
  "Andre Young": { alias: "Dr. Dre" },
  "Calvin Broadus": { alias: "Snoop Doggy Dogg" },
  "Shawn Carter": { alias: "Jay-Z" },
  "Eric Wright": { alias: "Eazy-E" }
};
assertEqual(findKey(rapperNames, rapper => rapper.alias === "Eminem"), "Marshall Mathers");
assertEqual(findKey(rapperNames, rapper => rapper.alias === "ODB"), "Russell Jones");
assertEqual(findKey(rapperNames, rapper => rapper.alias === "Eazy-E"), "Eric Wright");