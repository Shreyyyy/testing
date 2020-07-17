const add = require('../add')
const assert = require('assert')


/*
if (result == expected ){
    console.log('test passed')
} else {
    throw new Error('Expected 1+3 to equal 4s ')
}
*/
describe('The Add function',() => {
    it('adds two numbers',() => {
        const result = add.adder(1,3)
        const expected = 4
        assert.equal(result,expected,'Add function doesn\'t work properly')

    })
})