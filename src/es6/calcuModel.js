import baseModel from './baseModel'
import { log } from './defDecorator'

export default class calcuModel extends baseModel {
  @log
  add (x, y) {
    return x + y
  }

  @log
  diff (targetArr) {
    if (!targetArr instanceof Array) {
      return targetArr
    }
    return [...new Set(targetArr)]
  }
}

calcuModel.prototype.del = (x, y) => {
  return x - y
}
