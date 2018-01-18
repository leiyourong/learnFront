import baseModel from './baseModel'
import { log, interval, author } from './defDecorator'

@author('lyr')
export default class calcuModel extends baseModel {
  // @log
  add (x, y) {
    return x + y
  }

  // @log
  diff (targetArr) {
    if (!targetArr instanceof Array) {
      return targetArr
    }
    return [...new Set(targetArr)]
  }


  @log
  @interval(1000)
  addOne (num) {
    return num + 1
  }
}

calcuModel.prototype.del = (x, y) => {
  return x - y
}
