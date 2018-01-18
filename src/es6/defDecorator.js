export function log (target, name, descriptor) {
  const oldValue = descriptor.value
  descriptor.value = function (...args) {
    const res = oldValue.apply(this, args)
    console.log(`${target.constructor.name}.${name}(${args}): ${res}`)
    return res
  }
  return descriptor
}

let intervalTime = -1
export function interval (ms) {
  return function (target, name, descriptor) {
    const oldValue = descriptor.value
    descriptor.value = function (...args) {
      const now = Date.now()
      if (intervalTime !== -1 && now - intervalTime < ms) {
        return
      }
      intervalTime = now
      return oldValue.apply(this, args)
    }
    return descriptor
  }
}

export function author(authorName) {
  return function (target, name, descriptor) {
    target.author = authorName
    target.prototype.author = authorName
  }
}
