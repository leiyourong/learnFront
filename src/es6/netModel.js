import baseModel from './baseModel'
import { log } from './defDecorator'
import fetch from 'node-fetch'

export default class netModel extends baseModel {
  async getUrl (url) {
    const file = await fetch(url)
    return file
  }
}
