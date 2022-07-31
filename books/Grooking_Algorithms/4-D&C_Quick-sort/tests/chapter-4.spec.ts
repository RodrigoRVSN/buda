import { describe, it, expect } from 'vitest'
import { maximunNumber } from '../maximunNumber'
import { quickSort } from '../quickSort'
import { recursiveCount } from '../recursiveCount'
import { recursiveSum } from '../recursiveSum'

describe('Chapter 4 - D&C - Recursive', () => {
  it('should be able to get a max number in recursive way', () => {
    expect(maximunNumber([1, 6, 4, 2, 3])).toBe(6)
  })

  it('should be able to count elements in array in recursive way', () => {
    expect(recursiveCount([1, 6, 4, 2, 3])).toBe(5)
  })

  it('should be able to sum elements in array in recursive way', () => {
    expect(recursiveSum([1, 6, 4, 2, 3])).toBe(16)
  })
})

describe('Chapter 4 - Quick Sort', () => {
  it('should be able to make a sort with quicksort when pivot has index 0', () => {
    const list = [1, 6, 4, 2, 3]
    const expectedReturn = [1, 2, 3, 4, 6]

    expect(quickSort(list)).toStrictEqual(expectedReturn)
  })
})
