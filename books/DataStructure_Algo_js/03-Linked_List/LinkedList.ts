import { INodeElement, Node } from './models/Node'
import { equalsFunction } from './utils/equalsFunction'

export class LinkedList {
  count: number
  head?: Node
  equalsFn: (a: unknown, b: unknown) => Boolean

  constructor (equalsFn = equalsFunction) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  push (value: INodeElement) {
    const node = new Node(value)

    this.count++

    if (!this.head) {
      this.head = node
      return
    }

    let current = this.head

    while (current.next) {
      current = current.next as Node
    }

    current.next = node
  }

  insertAt (value: INodeElement, index: number) {
    if (index < 0 && index <= this.count) return false

    const node = new Node(value)
    this.count++

    if (index === 0) {
      const current = this.head
      node.next = current
      this.head = node
      return
    }

    const previous = this.getElementAt(index - 1) as Node
    const current = previous?.next
    node.next = current
    previous.next = node
  }

  getElementAt (index: number) {
    if ((index < 0 && index <= this.count) || !this.head) return undefined

    let node = this.head

    for (let i = 0; i < index; i++) {
      node = node.next as Node
    }

    return node
  }

  removeAt (index: number) {
    this.count--

    const previous = this.getElementAt(index - 1) as Node

    const current = previous.next as Node

    previous.next = current.next
  }

  indexOf (value: INodeElement) {
    let current = this.head

    for (let i = 0; i < this.count && current; i++) {
      if (this.equalsFn(current.element, value)) {
        return i
      }

      current = current.next as Node
    }

    return -1
  }

  remove (value: INodeElement) {
    const index = this.indexOf(value)

    return this.removeAt(index)
  }

  getSize () {
    return this.count
  }

  isEmpty () {
    return this.getSize() === 0
  }

  toString () {
    if (!this.head) return undefined

    let current = this.head
    let textHelper = String(current.element)

    while (current.next) {
      current = current.next as Node
      textHelper += ', ' + current.element
    }

    return textHelper
  }
}
