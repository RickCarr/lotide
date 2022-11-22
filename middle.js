const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  for (let i of array) {
    array.pop(i);
    array.shift(i);
  }
  return array;
};

//alt method, with more code.
// const middle = function(array) {
//   let center = array.length / 2;
//   if (array.length <= 2) {
//     return [];
//   }
//   if (array.length % 2 === 0) {
//     return array.slice(center - 1, center + 1);
//   } else {
//     return array.slice(center, center + 1);
//   }
// };

module.exports = middle;