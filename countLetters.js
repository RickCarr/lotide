const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed 😎: \x1b[32m ${actual}  === ${expected} \x1b[0m`);
  } else {
    console.log(`😞 Assertion Failed 😞: \x1b[31m ${actual} !== \x1b[32m ${expected} \x1b[0m`);
  }
};

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

const result1 = (countLetters("lighthouse in the house"));
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 99/*fail*/);
assertEqual(result1["z"], undefined);
