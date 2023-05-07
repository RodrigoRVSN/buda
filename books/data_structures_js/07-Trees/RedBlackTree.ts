import { BinaryTree } from './BinaryTree'
import { RedBlackNode } from './models/RedBlackNode'
import { Colors } from './utils/colors'
import { Compare, compareFunction } from './utils/compareFunction'

export class RedBlackTree extends BinaryTree {
  root: RedBlackNode | null
  compareFn: typeof compareFunction

  constructor (compareFn = compareFunction) {
    super(compareFn)
    this.compareFn = compareFn
    this.root = null
  }

  insert (key: number) {
    if (!this.root) {
      this.root = new RedBlackNode(key)
      this.root.color = Colors.BLACK
    } else {
      const newNode = this.insertNode(this.root, key)
      this.fixTreeProperties(newNode)
    }
  }

  insertNode (node: RedBlackNode, key: number): RedBlackNode {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (!node.left) {
        node.left = new RedBlackNode(key)
        node.left.parent = node
        return node.left as RedBlackNode
      } else {
        return this.insertNode((node.left as RedBlackNode), key)
      }
    } else if (!node.right) {
      node.right = new RedBlackNode(key)
      node.right.parent = node
      return node.right as RedBlackNode
    } else {
      return this.insertNode((node.right as RedBlackNode), key)
    }
  }

  fixTreeProperties (node: RedBlackNode) {
    while (node && node.parent && node.parent.isRed() && node.color !== Colors.BLACK) {
      let parent = node.parent
      const grandParent = parent.parent

      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right as RedBlackNode

        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent
        } else {
          if (node === parent.right) {
            this.rotationRR(parent)
            node = parent
            parent = node.parent!
          }
          this.rotationLL(grandParent)
          parent.color = Colors.BLACK
          grandParent.color = Colors.RED
          node = parent
        }
      } else {
        const uncle = grandParent?.left as RedBlackNode
        if (uncle && uncle.color === Colors.RED) {
          grandParent!.color = Colors.RED
          parent.color = Colors.BLACK
          uncle.color = Colors.BLACK
          node = grandParent!
        } else {
          if (node === parent.left) {
            this.rotationLL(parent)
            node = parent
            parent = node.parent!
          }
          this.rotationRR(grandParent as RedBlackNode)
          parent.color = Colors.BLACK
          grandParent!.color = Colors.RED
          node = parent
        }
      }
    }

    this.root!.color = Colors.BLACK
  }

  rotationLL (node: RedBlackNode) {
    const temp = node.left!
    node.left = temp.right
    if (temp.right && temp.right.key) {
      temp.right.parent = node
    }
    temp.parent = node.parent
    if (!node.parent) {
      this.root = temp as RedBlackNode
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp
      } else {
        node.parent.right = temp
      }
    }
    temp.right = node
    node.parent = temp as RedBlackNode
  }

  rotationRR (node: RedBlackNode) {
    const temp = node.right!
    node.right = temp.left

    if (temp.left && temp.left.key) {
      temp.left.parent = node
    }
    temp.parent = node.parent
    if (!node.parent) {
      this.root = temp as RedBlackNode
    } else {
      if (node === node.parent.left) {
        node.parent.left = temp
      } else {
        node.parent.right = temp
      }
    }
    temp.left = node
    node.parent = temp as RedBlackNode
  }
}
