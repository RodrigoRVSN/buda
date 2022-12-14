import { LinkedList } from './LinkedList'
import { DoublyNode } from './models/DoublyNode'
import { INodeElement } from './models/Node'
import { equalsFunction } from './utils/equalsFunction'

export class DoublyLinkedList extends LinkedList {
  tail?: DoublyNode
  head?: DoublyNode

  constructor (equalsFn = equalsFunction) {
    super(equalsFn)
    this.tail = undefined
  }

  insert (element: INodeElement, index: number) {
    const node = new DoublyNode(element)
    let current = this.head!

    if (index === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        current.prev = node
        this.head = node
      }

      this.count++
      return
    }

    if (index === this.count) {
      current = this.tail as DoublyNode
      current.next = node
      node.prev = current
      this.tail = node

      this.count++
      return
    }

    const previous = this.getElementAt(index - 1) as DoublyNode
    current = previous.next as DoublyNode

    node.next = current
    previous.next = node
    current.prev = node
    node.prev = previous

    this.count++
  }

  push (value: INodeElement) {
    return this.insert(value, this.count)
  }

  removeAt (index: number) {
    if ((index < 0 && index >= this.count) || !this.head) return undefined

    let current = this.head as any

    if (index === 0) {
      this.head = current.next as DoublyNode

      if (this.count === 1) {
        this.tail = undefined
      } else {
        this.head.prev = undefined
      }
      this.count--
      return
    }

    if (index === this.count - 1) {
      current = this.tail
      this.tail = current.prev as DoublyNode
      this.tail.next = undefined
      this.count--
      return
    }

    current = this.getElementAt(index)
    const previous = current.prev
    previous.next = current.next
    current.next.prev = previous
    this.count--
  }
}
