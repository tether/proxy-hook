
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


test('should only hook an existing function', assert => {
  assert.plan(1)
  const api = hook({
    get(params) {
      return params
    }
  }, {
    post() {
      return 'hello'
    }
  })
  assert.equal(api.get('world'), 'world')
})


test('should not hook a property', assert => {
  assert.plan(2)
  const api = hook({
    get: 'hello'
  }, {
    get() {
      return 'world'
    }
  })
  assert.equal(typeof api.get, 'string')
  assert.equal(api.get, 'hello')
})


test('should work with multiple functions', assert => {
  assert.plan(2)
  const api = hook({
    get(params) {
      return params
    },
    post(params) {
      return 'hello ' + params
    }
  }, {
    get() {
      return 'foo'
    },
    post(params) {
      return params
    }
  })
  assert.equal(api.get(), 'foo')
  assert.equal(api.post('world'), 'hello world')
})
