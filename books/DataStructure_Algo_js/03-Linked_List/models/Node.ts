export type INodeElement = number | string

export class Node {
  element?: INodeElement
  next: unknown

  constructor (element?: INodeElement) {
    this.element = element
    this.next = undefined
  }
}
