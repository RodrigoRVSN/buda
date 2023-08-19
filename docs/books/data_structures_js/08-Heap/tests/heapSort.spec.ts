import { describe, it, expect } from 'vitest'
import { heapSort } from '../heapSort'

describe('Data Structure - heapSort', () => {
  it('should be order an array using heapSort', () => {
    const array = [5, 1, 3, 7, 9, 2]

    expect(heapSort(array)).toStrictEqual([1, 2, 3, 5, 7, 9])
  })
})
