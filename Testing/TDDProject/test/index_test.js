var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('factorial', () => {
      //setup
      const inputNumber = 4;
      const expected = 24;

      //exercise
      const result = Calculate.factorial(inputNumber);

      //verify
      assert.strictEqual(result, expected)
    })

    it('if return to 0 result 1', () => {
      //setup
      const inputNumber = 0;
      const expected = 1;
  
      //exercise
      const result = Calculate.factorial(inputNumber);

      //verify
      assert.strictEqual(result, expected)
    })
  });
});