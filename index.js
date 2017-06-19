
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (obj, before, after) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      const cb = target[property]
      const beforeHook = before && before[property]
      const afterHook = after && after[property]
      if (typeof cb === 'function') {
        return (...args) => {
          if (typeof beforeHook === 'function') {
            args = [beforeHook.apply(this, args)]
          }
          let result = cb.apply(this, args)
          if (typeof afterHook === 'function') {
            result = afterHook.call(this, result)
          }
          return result
        }
      }
      return cb
    }
  })
}
