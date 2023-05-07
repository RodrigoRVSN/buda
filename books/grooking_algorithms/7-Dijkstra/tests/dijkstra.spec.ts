import { describe, it, expect } from 'vitest'
import { dijkstraAlgorithm } from '../dijkstra'

describe('Chapter 7 - Dijkstra', () => {
  it('should be able to calculate the shortest path', () => {
    const expectedResult = { a: 5, b: 2, fin: 6 }

    expect(dijkstraAlgorithm()).toStrictEqual(expectedResult)
  })
})
