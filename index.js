
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (obj, before) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      return (...args) => {
        console.log('youhouuu')
      }
    }
  })
}
