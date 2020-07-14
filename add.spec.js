const add = require('./add')
const assert = require('assert')

const result = add(1,3)
const expected = 4
/*
if (result == expected ){
    console.log('test passed')
} else {
    throw new Error('Expected 1+3 to equal 4s ')
}
*/
assert.equal(result,expected,'Add function doesn\'t work properly)