import { LinkedList } from './LinkedList'
import { INodeElement, Node } from './models/Node'
import { Compare, compareFunction } from './utils/compareFunction'
import { equalsFunction } from './utils/equalsFunction'

export class OrderedLinkedList extends LinkedList {
  compareFn: typeof compareFunction

  constructor (equalsFn = equalsFunction, compareFn = compareFunction) {
    super(equalsFn)
    this.compareFn = compareFn
  }

  insert (element: INodeElement) {
    if (this.isEmpty()) {
      return super.insertAt(element, 0)
    }

    const position = this.getIndexNextSortedElement(element)
    return super.insertAt(element, position)
  }

  getIndexNextSortedElement (element: INodeElement) {
    let current = this.head
    let i = 0

    for (; i < this.getSize() && current; i++) {
      const compare = this.compareFn(element, Number(current.element))

      if (compare === Compare.LESS_THAN) {
        return i
      }

      current = current.next as Node
    }

    return i
  }
}
