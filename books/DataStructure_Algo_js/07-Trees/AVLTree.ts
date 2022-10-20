import { BinaryTree } from './BinaryTree'
import { INode, Node } from './models/Node'
import { BalanceFactor } from './utils/balanceFactor.enum'
import { Compare, compareFunction } from './utils/compareFunction'

export class AVLTree extends BinaryTree {
  root: Node | null
  compareFn: typeof compareFunction

  constructor (compareFn = compareFunction) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  getNodeHeight (node: INode): number {
    if (!node) return -1
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1
  }

  getBalanceFactor (node: INode) {
    const heightDifference = this.getNodeHeight(node!.left) - this.getNodeHeight(node!.right)

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      case 2:
        return BalanceFactor.UNBALANCED_LEFT
      default:
        return BalanceFactor.BALANCED
    }
  }

  rotationLL (node: Node) {
    const temp = node.left!
    node.left = temp.right
    temp.right = node
    return temp
  }

  rotationRR (node: Node) {
    const temp = node.right!
    node.right = temp.left
    temp.left = node
    return temp
  }

  rotationLR (node: Node) {
    node.left = this.rotationRR(node.left!)
    return this.rotationLL(node)
  }

  rotationRL (node: Node) {
    node.right = this.rotationLL(node.right!)
    return this.rotationRR(node)
  }

  insert (key: number): void {
    this.root = this.insertNode(this.root!, key)
  }

  insertNode (node: Node, key: number) {
    if (!node) return new Node(key)

    else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left!, key)!
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right!, key)!
    } else {
      return node
    }

    const balanceFactor = this.getBalanceFactor(node)

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left!.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node)
      } else {
        return this.rotationLR(node)
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right!.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node)
      } else {
        return this.rotationRL(node)
      }
    }

    return node
  }

  removeNode (node: INode, key: number) {
    node = super.removeNode(node, key)

    if (!node) return node

    const balanceFactor = this.getBalanceFactor(node)

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left)

      if (balanceFactorLeft === BalanceFactor.BALANCED || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationLL(node)
      } if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left!)
      }
    }

    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right)

      if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationRR(node)
      } if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right!)
      }
    }

    return node
  }
}
