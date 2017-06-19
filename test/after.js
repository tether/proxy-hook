
/**
 * Test dependencies.
 */

const test = require('tape')
const hook = require('..')


test('after # should hook a function', assert => {
  assert.plan(1)
  const api = hook({
    get(params) {
      return params
    }
  }, null, {
    get(params) {
      return 'hello ' + params
    }
  })
  assert.equal(api.get('world'), 'hello world')
})



test('after # should only hook an existing function', assert => {
  assert.plan(1)
  const api = hook({
    get(params) {
      return params
    }
  }, null, {
    post() {
      return 'hello'
    }
  })
  assert.equal(api.get('world'), 'world')
})


test('after # should not hook a property', assert => {
  assert.plan(2)
  const api = hook({
    get: 'hello'
  }, null, {
    get() {
      return 'world'
    }
  })
  assert.equal(typeof api.get, 'string')
  assert.equal(api.get, 'hello')
})


test('after # should work with multiple functions', assert => {
  assert.plan(2)
  const api = hook({
    get(params) {
      return params
    },
    post(params) {
      return 'hello ' + params
    }
  }, null, {
    get(param) {
      return `foo and ${param}`
    },
    post(params) {
      return params
    }
  })
  assert.equal(api.get('bar'), 'foo and bar')
  assert.equal(api.post('world'), 'hello world')
})
