import { describe, it, expect } from 'vitest'
import { MaxHeap } from '../MaxHeap'

describe('Data Structure - MaxHeap', () => {
  it('should be able to manipulate a MaxHeap', () => {
    const maxHeap = new MaxHeap()

    maxHeap.insert(2)
    maxHeap.insert(3)
    maxHeap.insert(4)
    maxHeap.insert(5)
    maxHeap.insert(1)

    expect(maxHeap.findMinimum()).toBe(5)
    expect(maxHeap.heap).toStrictEqual([5, 4, 3, 2, 1])
  })
})
