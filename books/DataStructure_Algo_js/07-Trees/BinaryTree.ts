import { INode, Node } from './models/Node'
import { Compare, compareFunction } from './utils/compareFunction'

export class BinaryTree {
  root: Node | null
  compareFn: typeof compareFunction

  constructor (compareFn = compareFunction) {
    this.compareFn = compareFn
    this.root = null
  }

  insert (key: number) {
    if (!this.root) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode (node: Node, key: number) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (!node.left) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (!node.right) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  inOrderTraverseNode (node: INode, callback: Function) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  inOrderTraverse (callback: Function) {
    this.inOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode (node: INode, callback: Function) {
    if (node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse (callback: Function) {
    this.preOrderTraverseNode(this.root, callback)
  }

  posOrderTraverseNode (node: INode, callback: Function) {
    if (node) {
      this.posOrderTraverseNode(node.left, callback)
      this.posOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  posOrderTraverse (callback: Function) {
    this.posOrderTraverseNode(this.root, callback)
  }

  minNode (node: Node) {
    let current = node

    while (current && current.left) {
      current = current.left
    }
    return current
  }

  min () {
    return this.minNode(this.root!)
  }

  max () {
    return this.maxNode(this.root!)
  }

  maxNode (node: Node) {
    let current = node

    while (current && current.right) {
      current = current.right
    }
    return current
  }

  remove (key: number) {
    this.removeNode(this.root!, key)
  }

  removeNode (node: INode, key: number) {
    if (!node) return null

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (!node.left && !node.right) {
        node = null
        return node
      }
      if (!node.left) {
        node = node.right
        return node
      } else if (!node.right) {
        node = node.left
        return node
      }

      const aux = this.minNode(node.right)
      node.key = aux?.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }

  search (key: number) {
    return this.searchNode(this.root!, key)
  }

  searchNode (node: INode, key: number): boolean {
    if (!node) return false

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
}
