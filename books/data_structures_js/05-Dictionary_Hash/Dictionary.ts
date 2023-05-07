import { ValuePair } from './models/ValuePair'
import { defaultToString } from './utils/defaultToString'

type ITable = { [key: string]: ValuePair }

export class Dictionary {
  table: ITable
  toStr: typeof defaultToString

  constructor (toStr = defaultToString) {
    this.toStr = toStr
    this.table = {}
  }

  hasKey (key: string) {
    return !!this.table[key]
  }

  set (key: string, value: unknown) {
    if (key && value) {
      this.table[key] = new ValuePair(key, value)

      return true
    }

    return false
  }

  remove (key: string) {
    if (this.hasKey(key)) {
      delete this.table[key]
      return true
    }

    return false
  }

  get (key: string) {
    return this.table[key]?.value
  }

  keyValues () {
    return Object.values(this.table)
  }

  keys () {
    return this.keyValues().map(valuePair => valuePair.key)
  }

  values () {
    return this.keyValues().map(valuePair => valuePair.value)
  }

  forEach (callbackFn: Function) {
    const valuePairs = this.keyValues()

    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value)

      if (!result) break
    }
  }

  size () {
    return this.keyValues().length
  }

  isEmpty () {
    return this.size() === 0
  }

  clear () {
    this.table = {}
  }

  toString () {
    if (this.isEmpty()) return ''

    const valuePairs = this.keyValues()

    let stringHelper = valuePairs[0].toString()

    for (let i = 1; i < valuePairs.length; i++) {
      stringHelper += valuePairs[i].toString()
    }

    return stringHelper
  }
}
