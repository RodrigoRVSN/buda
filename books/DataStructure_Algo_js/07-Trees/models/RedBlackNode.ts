import { Colors } from '../utils/colors'
import { Node } from './Node'

export type INode = RedBlackNode | null

export class RedBlackNode extends Node {
  key: number
  color: string

  constructor (key: number) {
    super(key)
    this.key = key
    this.color = Colors.RED
  }

  isRed () {
    return this.color === Colors.RED
  }
}
