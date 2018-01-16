export function log (target, name, descriptor) {
  const oldValue = descriptor.value
  descriptor.value = function (...args) {
    const res = oldValue.apply(this, args)
    // console.log(`${target.constructor.name}.${name}(${args}): ${res}`)
    return res
  }
  return descriptor
}
