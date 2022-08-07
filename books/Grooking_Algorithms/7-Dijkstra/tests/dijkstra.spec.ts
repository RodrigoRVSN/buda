import { describe, it, expect } from 'vitest'
import { dijkstraAlgorithm } from '../dijkstra'

describe('Chapter 6 - Breadth First Search', () => {
  it('should be able find a manga seller', () => {
    const expectedResult = { a: 5, b: 2, fin: 6 }

    expect(dijkstraAlgorithm()).toStrictEqual(expectedResult)
  })
})
