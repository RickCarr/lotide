const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed 😎: \x1b[32m ${actual}  === ${expected} \x1b[0m`);
  } else {
    console.log(`😞 Assertion Failed 😞: \x1b[31m ${actual} !== \x1b[32m ${expected} \x1b[0m`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// const eqArrays = function(arrayA, arrayB) {
// const colors = {
//    reset : "\x1b[0m",
//    fgRed : "\x1b[31m",
//    fgGreen : "\x1b[32m",
//   };
//   
//   let result = true;  //set default to true
//   if (arrayA.length !== arrayB.length) result = false; //fails if arrays are diff lengths
//   for (let index = 0; index < arrayA.length; index++) { 
//     if (arrayA[index] !== arrayB[index]) result = false; //fails if any index of the arrays don't match
//   }
//   result === true ? console.log(`😎 Arrays Match!! 😎: \n ${fgGreen} ${arrayA} === ${arrayB} ${reset}`)
//     : console.log(`😞 Arrays Don't Match!! 😞: \n ${fgRed} ${arrayA} === ${arrayB} ${reset}`);
// };

