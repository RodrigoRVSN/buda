export type INodeElement = number | string

export class Node {
  element?: INodeElement
  next: unknown

  constructor (element?: INodeElement, next = undefined) {
    this.element = element
    this.next = next
  }
}
