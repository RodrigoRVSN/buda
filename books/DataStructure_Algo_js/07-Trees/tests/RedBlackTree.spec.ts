import { describe, it, expect } from 'vitest'
import { RedBlackTree } from '../RedBlackTree'

describe('Data Structure - RedBlackTree', () => {
  it('should be able to manipulate a RedBlackTree', () => {
    const rbTree = new RedBlackTree()

    rbTree.insert(50)
    rbTree.insert(30)
    rbTree.insert(70)
    rbTree.insert(40)
    rbTree.insert(10)
    rbTree.insert(5)

    const inOrderList = [] as number[]
    const pushInOrder = (value: number) => inOrderList.push(value)
    rbTree.inOrderTraverse(pushInOrder)
    expect(inOrderList).toStrictEqual([5, 10, 30, 40, 50, 70])

    expect(rbTree.min()?.key).toBe(5)
    expect(rbTree.max()?.key).toBe(70)

    rbTree.remove(40)

    const newList = [] as number[]
    const pushNew = (value: number) => newList.push(value)
    rbTree.inOrderTraverse(pushNew)
    expect(newList).toStrictEqual([5, 10, 30, 50, 70])

    expect(rbTree.search(30)).toBeTruthy()
    expect(rbTree.search(3)).toBeFalsy()
    expect(rbTree.search(100)).toBeFalsy()
  })
})
