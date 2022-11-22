const assertArraysEqual = require("../assertArraysEqual");

const cat = `"playss with string"`;
assertArraysEqual(["Using numbers", 1, 2, 3], ["Using numbers", 1, 2, 3]);
assertArraysEqual(["Using", " const cat =", cat], ["Using", " const cat =", cat]);
assertArraysEqual(["Lana", "Billie", "Zella"], ["Lana", "Billie", "Zella"]);
