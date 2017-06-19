// 
// /**
//  * Test dependencies.
//  */
//
// const test = require('tape')
// const hook = require('..')
//
//
// test('after # should hook a function', assert => {
//   assert.plan(1)
//   const api = hook({
//     get(params) {
//       return params
//     }
//   }, null, {
//     get(params) {
//       return 'hello ' + params
//     }
//   })
//   assert.equal(api.get('world'), 'hello world')
// })
