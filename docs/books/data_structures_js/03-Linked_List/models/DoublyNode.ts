import { INodeElement, Node } from './Node'

export class DoublyNode extends Node {
  element?: INodeElement
  prev?: unknown

  constructor (element: INodeElement, next = undefined, previous = undefined) {
    super(element, next)
    this.prev = previous
  }
}
