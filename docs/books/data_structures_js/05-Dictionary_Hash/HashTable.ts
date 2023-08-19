import { ValuePair } from './models/ValuePair'
import { defaultToString } from './utils/defaultToString'

type ITable = { [key: string]: ValuePair }

export class HashTable {
  table: ITable
  toStr: typeof defaultToString

  constructor (toStr = defaultToString) {
    this.toStr = toStr
    this.table = {}
  }

  loseloseHashCode (key: string) {
    if (typeof key === 'number') {
      return key
    }

    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    return hash % 37
  }

  hashCode (key: string) {
    return this.loseloseHashCode(key)
  }

  put (key: string, value: unknown) {
    if (key && value) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)

      return true
    }

    return false
  }

  remove (key: string) {
    const position = this.hashCode(key)
    const valuePair = this.table[position]

    if (valuePair) {
      delete this.table[position]
      return true
    }

    return false
  }

  get (key: string) {
    const position = this.hashCode(key)
    return this.table[position]?.value
  }
}
