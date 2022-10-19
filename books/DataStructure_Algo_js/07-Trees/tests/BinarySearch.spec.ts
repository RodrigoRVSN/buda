import { describe, it, expect } from 'vitest'
import { BinaryTree } from '../BinaryTree'

describe('Data Structure - BinaryTree', () => {
  it('should be able to manipulate a BinaryTree', () => {
    const binaryTree = new BinaryTree()

    binaryTree.insert(11)
    binaryTree.insert(7)
    binaryTree.insert(15)
    binaryTree.insert(5)
    binaryTree.insert(3)
    binaryTree.insert(9)
    binaryTree.insert(8)
    binaryTree.insert(10)
    binaryTree.insert(13)
    binaryTree.insert(12)
    binaryTree.insert(14)
    binaryTree.insert(20)
    binaryTree.insert(18)
    binaryTree.insert(25)
    binaryTree.insert(6)

    const inOrderList = [] as number[]
    const pushInOrder = (value: number) => inOrderList.push(value)
    binaryTree.inOrderTraverse(pushInOrder)
    expect(inOrderList).toStrictEqual([3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 20, 25])

    const preOrderList = [] as number[]
    const pushPreOrder = (value: number) => preOrderList.push(value)
    binaryTree.preOrderTraverse(pushPreOrder)
    expect(preOrderList).toStrictEqual([11, 7, 5, 3, 6, 9, 8, 10, 15, 13, 12, 14, 20, 18, 25])

    const posOrdemList = [] as number[]
    const pushPosOrder = (value: number) => posOrdemList.push(value)
    binaryTree.posOrderTraverse(pushPosOrder)
    expect(posOrdemList).toStrictEqual([3, 6, 5, 8, 10, 9, 7, 12, 14, 13, 18, 25, 20, 15, 11])

    expect(binaryTree.min()?.key).toBe(3)
    expect(binaryTree.max()?.key).toBe(25)

    binaryTree.remove(3)
    binaryTree.remove(5)
    binaryTree.remove(10)
    binaryTree.remove(20)
    binaryTree.remove(25)
    binaryTree.remove(18)

    const newList = [] as number[]
    const pushNew = (value: number) => newList.push(value)
    binaryTree.inOrderTraverse(pushNew)
    expect(newList).toStrictEqual([6, 7, 8, 9, 11, 12, 13, 14, 15])

    expect(binaryTree.search(7)).toBeTruthy()
    expect(binaryTree.search(3)).toBeFalsy()
    expect(binaryTree.search(100)).toBeFalsy()
  })
})
