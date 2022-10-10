import { LinkedList } from '../03-Linked_List/LinkedList'
import { INodeElement, Node } from '../03-Linked_List/models/Node'
import { ValuePair } from './models/ValuePair'
import { defaultToString } from './utils/defaultToString'

type ITable = { [key: string]: LinkedList }

type HashObject = {
  key: string
  value: unknown
}

export class HashTableSeparateChaining {
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

      if (!this.table[position]) {
        this.table[position] = new LinkedList()
      }
      this.table[position].push(new ValuePair(key, value) as unknown as INodeElement)

      return true
    }

    return false
  }

  remove (key: string) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]

    if (linkedList && !linkedList.isEmpty()) {
      let current = linkedList.head

      while (current) {
        const element = current?.element as unknown as HashObject
        if (element.key === key) {
          linkedList.remove(element as unknown as INodeElement)

          if (linkedList.isEmpty()) {
            delete this.table[position]
            return true
          }
        }

        current = current.next as Node
      }
    }

    return false
  }

  get (key: string) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]

    if (linkedList && !linkedList.isEmpty()) {
      let current = linkedList.head

      while (current) {
        const element = current?.element as unknown as HashObject
        if (element.key === key) {
          return element.value
        }

        current = current.next as Node
      }
    }
    return undefined
  }
}
