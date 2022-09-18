import { DoublyLinkedList } from './DoublyLinkedList'
import { INodeElement } from './models/Node'

export class StackLinkedList {
  items: DoublyLinkedList

  constructor () {
    this.items = new DoublyLinkedList()
  }

  push (element: INodeElement) {
    this.items.push(element)
  }

  pop () {
    if (this.isEmpty()) return undefined

    return this.items.removeAt(this.getSize() - 1)
  }

  peek () {
    if (this.isEmpty()) return undefined

    return this.items.getElementAt(this.getSize() - 1)?.element
  }

  isEmpty () {
    return this.items.isEmpty()
  }

  getSize () {
    return this.items.getSize()
  }

  toString () {
    return this.items.toString()
  }
}
