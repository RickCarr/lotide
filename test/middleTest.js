const assert = require('chai').assert;
const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


describe("#middle", () => {

  it(`returns [] for [1]`, () => {
    assert.deepEqual(middle([1]), []);

  });

  it(`returns [] for [1, 2]`, () => {
    assert.deepEqual(middle([1, 2]), []);

  });


  it(`returns [2] for [[1, 2, 3]]`, () => {
    assert.deepEqual((middle([1, 2, 3])), [2]);

  });

  it(`returns [3, 4] for [1, 2, 3, 4, 5, 6]`, () => {
    assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);

  });
});