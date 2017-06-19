
/**
 * This is a simple description.
 *
 * @api public
 */

module.exports = function (obj, before, after) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      const cb = target[property]
      const beforeHook = before[property]
      //const afterHook = after[property]
      if (typeof cb === 'function') {
        return (...args) => {
          if (typeof beforeHook === 'function') {
            args = [beforeHook.apply(this, args)]
          }
          return cb.apply(this, args)
        }
      } else {
        return cb
      }
    }
  })
}
