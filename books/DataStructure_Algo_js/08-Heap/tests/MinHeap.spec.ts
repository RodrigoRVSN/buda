import { describe, it, expect } from 'vitest'
import { MinHeap } from '../MinHeap'

describe('Data Structure - MinHeap', () => {
  it('should be able to manipulate a MinHeap', () => {
    const minHeap = new MinHeap()

    for (let i = 1; i < 10; i++) {
      minHeap.insert(i)
    }

    expect(minHeap.extract()).toBe(1)
    expect(minHeap.heap).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9])
  })
})
