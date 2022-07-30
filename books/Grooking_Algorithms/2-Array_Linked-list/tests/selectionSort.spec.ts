import { describe, it, expect } from 'vitest'
import { selectionSort } from '../selectionSort'

describe('Chapter 2 - Selection Sort', () => {
  it('should be able to return a ordered list', () => {
    const numbersList = [6, 2, 5, 1, 4]
    const expectedResult = [1, 2, 4, 5, 6]

    expect(selectionSort(numbersList)).toStrictEqual(expectedResult)
  })
})
