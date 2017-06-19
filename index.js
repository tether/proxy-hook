
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (obj, before) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      const cb = target[property]
      const hook = before[property]
      return (...args) => {
        if (typeof hook === 'function') {
          const result = hook.apply(this, args)
          return cb(result)
        } else {
          return cb.apply(this, args)
        }
      }
    }
  })
}
