const eqArrays = function(arrayA, arrayB) {
  const reset = "\x1b[0m";
  const fgRed = "\x1b[31m";
  const fgGreen = "\x1b[32m";
  let result = true;  //set default to true
  if (arrayA.length !== arrayB.length) result = false; //fails if arrays are diff lengths
  for (let index = 0; index < arrayA.length; index++) { 
    if (arrayA[index] !== arrayB[index]) result = false; //fails if any index of the arrays don't match
  }
  result === true ? console.log(`😎 Great Success!! 😎: \n ` + fgGreen, `${arrayA} === ${arrayB}`, reset)
    : console.log(`😞 Failure Detected!! 😞: \n` + fgRed, `${arrayA} === ${arrayB}`, reset);
};
//assertions listed below
const apple = "this is an apple";
eqArrays([1, 2, 3], [1, 2, 3]); //true
eqArrays(["banana", 2, apple], ["banana", 2, apple]); //true
eqArrays(["banana", 2, apple],["banana", 2, "apple"]); //false
eqArrays(["banana", 2, apple],["banana", 3, "this is an apple"]); //false