import { describe, it, expect } from 'vitest'
import { getLowerIndex } from '../getLowerIndex'

describe('Chapter 2 - Selection Sort -> Get Lowest Value', () => {
  it('should be able to get the index of the lowest value', () => {
    const numbersList = [6, 2, 5, 1, 4]

    expect(getLowerIndex(numbersList)).toBe(3)
  })
})
