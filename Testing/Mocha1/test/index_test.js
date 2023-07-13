const assert = require('assert');
const { describe, it } = require("mocha");

describe('Math', ()=>{
    describe('.min', () => {
        it('Return to infinity', () => {
            assert.ok(3+1 === 2);
        })
    })
})

//Önerilen 3 adımda test
// 3 phase approach
describe('.pop', () => {
    it('returns the last element in the array [3phase]', () => {
      // Setup
      const knightString = 'knight';
      const jediPath = ['padawan', knightString];
  
      // Exercise
      const popped = jediPath.pop();
  
      // Verify
      assert.ok(popped === knightString);
    });
  });
  