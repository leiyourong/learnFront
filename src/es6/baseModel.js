import { log } from './defDecorator'

export default class baseModel {
  constructor(name) {
    this.className = name || 'baseModel'
  }

  // @log
  getName () {
    return this.className
  }

  set alias (value) {
    this.className = value
  }

  get alias () {
    return this.className
  }
}
