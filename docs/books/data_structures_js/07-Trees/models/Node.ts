import { RedBlackNode } from './RedBlackNode'

export type INode = Node | null

export class Node {
  key: number
  left: INode
  right: INode
  parent?: RedBlackNode

  constructor (key: number) {
    this.key = key
    this.left = null
    this.right = null
  }
}
