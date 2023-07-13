const { describe, it } = require('mocha');

//ASSERT OK
// Import assert here
const assert = require('assert')

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.ok(result === expected)
  });
});

//ASSERT EQUAL (BUNUN YERİNE ASSERT.EQUAL KULLANACAĞIZ)
// Import assert here
const assert = require('assert');


describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.equal(result, expected);
  });
});


//ASSERT.STRICTEQUAL

describe('Iki sayı karşılaştırılması', () =>  {
    it('a ve b sayıları', () => {
        const a = 2;
        const b = '2';

        assert.strictEqual(a , b)
    })
})

//ASSERT.DEEPEQUAL ---- NESNELER ve DİZİLER İÇİN KARŞILAŞTIRMA
const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    assert.deepEqual(sum, expected);
  });
});

const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = [3, 4, 7];
		let sum = [3, 4];

    // Exercise
		sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});
