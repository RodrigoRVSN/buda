import { describe, it, expect } from 'vitest'
import { getStation } from '../greedyAlgo'

describe('Chapter 8 - NP-Complete', () => {
  it('should be able to get stations with unique values', () => {
    const expectedResult = new Set(['kone', 'ktwo', 'kthree', 'kfive'])

    expect(getStation()).toStrictEqual(expectedResult)
  })
})
