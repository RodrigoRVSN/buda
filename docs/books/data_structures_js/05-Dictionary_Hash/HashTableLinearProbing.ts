import { ValuePair } from './models/ValuePair'
import { defaultToString } from './utils/defaultToString'

type HashObject = {
  key: string
  value: unknown
}

type ITable = { [key: string]: HashObject }

export class HashTableLinearProbing {
  table: ITable
  toStr: typeof defaultToString

  constructor (toStr = defaultToString) {
    this.toStr = toStr
    this.table = {}
  }

  put (key: string, value: unknown) {
    if (key && value) {
      const position = this.hashCode(key)

      if (!this.table[position]) {
        this.table[position] = new ValuePair(key, value)
      } else {
        let index = position + 1
        while (this.table[index]) {
          index++
        }
        this.table[index] = new ValuePair(key, value)
      }

      return true
    }

    return false
  }

  remove (key: string) {
    const position = this.hashCode(key)

    if (this.table[position]) {
      if (this.table[position].key === key) {
        delete this.table[position]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
      let index = position + 1

      while (this.table[index] && this.table[index].key !== key) {
        index++
      }

      if (this.table[index] && this.table[index].key === key) {
        delete this.table[index]
        this.verifyRemoveSideEffect(key, position)
        return true
      }
    }
    return false
  }

  get (key: string) {
    const position = this.hashCode(key)

    if (this.table[position]) {
      if (this.table[position].key === key) {
        return this.table[position].value
      }
      let index = position + 1

      while (this.table[index] && this.table[index].key !== key) {
        index++
      }

      if (this.table[index] && this.table[index].key === key) {
        return this.table[position].value
      }
    }
    return undefined
  }

  djb2HashCode (key: string) {
    let hash = 5381

    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) + key.charCodeAt(i)
    }

    return hash % 1013
  }

  hashCode (key: string) {
    return this.djb2HashCode(key)
  }

  verifyRemoveSideEffect (key: string, removedPosition: number) {
    const hash = this.hashCode(key)
    let index = removedPosition + 1

    while (this.table[index]) {
      const posHash = this.hashCode(this.table[index].key)

      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index]
        delete this.table[index]
        removedPosition = index
      }
      index++
    }
  }
}
