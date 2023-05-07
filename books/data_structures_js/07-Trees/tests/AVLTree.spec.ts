import { describe, it, expect } from 'vitest'
import { AVLTree } from '../AVLTree'

describe('Data Structure - AVLTree', () => {
  it('should be able to manipulate a AVLTree', () => {
    const avlTree = new AVLTree()

    avlTree.insert(50)
    avlTree.insert(30)
    avlTree.insert(70)
    avlTree.insert(40)
    avlTree.insert(10)
    avlTree.insert(5)

    const inOrderList = [] as number[]
    const pushInOrder = (value: number) => inOrderList.push(value)
    avlTree.inOrderTraverse(pushInOrder)
    expect(inOrderList).toStrictEqual([5, 10, 30, 40, 50, 70])

    expect(avlTree.min()?.key).toBe(5)
    expect(avlTree.max()?.key).toBe(70)

    avlTree.remove(40)

    const newList = [] as number[]
    const pushNew = (value: number) => newList.push(value)
    avlTree.inOrderTraverse(pushNew)
    expect(newList).toStrictEqual([5, 10, 30, 50, 70])

    expect(avlTree.search(30)).toBeTruthy()
    expect(avlTree.search(3)).toBeFalsy()
    expect(avlTree.search(100)).toBeFalsy()
  })
})
