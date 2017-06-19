
/**
 * Test dependencies.
 */

const test = require('tape')
const hook = require('..')


test('should hook a function before', assert => {
  assert.plan(1)
  const api = hook({
    get(params) {
      return params
    }
  }, {
    get() {
      return 'hello'
    }
  })
  assert.equal(api.get(), 'hello')
})
