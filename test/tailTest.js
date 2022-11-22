const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it(`returns result.length = 2 for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result.length, 2);
  });

  it(`returns result[1] = 'Labs' for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result[1], "Labs");
  });

  it(`returns [ 'Lighthouse', 'Labs' ] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });

});
