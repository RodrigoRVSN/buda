import { LinkedList } from './LinkedList'
import { DoublyNode } from './models/DoublyNode'
import { INodeElement, Node } from './models/Node'
import { equalsFunction } from './utils/equalsFunction'

export class CircularLinkedList extends LinkedList {
  constructor (equalsFn = equalsFunction) {
    super(equalsFn)
  }

  insert (element: INodeElement, index: number) {
    const node = new Node(element)
    let current = this.head!

    this.count++

    if (index === 0) {
      if (!this.head) {
        this.head = node
        node.next = this.head
      } else {
        node.next = current
        current = this.getElementAt(this.getSize()) as DoublyNode
        this.head = node
        current.next = this.head
      }

      return
    }

    if (index === this.count) {
      node.next = current
      current = this.getElementAt(this.getSize()) as DoublyNode
      this.head = node
      current.next = this.head

      return
    }

    const previous = this.getElementAt(index - 1) as DoublyNode

    node.next = previous.next
    previous.next = node
  }

  removeAt (index: number) {
    if ((index < 0 && index <= this.count) || !this.head) return undefined

    this.count--
    let current = this.head as any

    if (index === 0) {
      if (this.getSize() === 1) {
        this.head = undefined
      } else {
        const removed = this.head
        current = this.getElementAt(this.getSize())
        this.head = this.head.next as Node
        current.next = this.head
        current = removed
      }
      return
    }

    const previous = this.getElementAt(index - 1) as Node
    current = previous.next
    previous.next = current.next
  }
}
