import { describe, it, expect } from 'vitest'
import { factorial } from '../factorial'

describe('Chapter 3 - Recursion - Factorial', () => {
  it('should be able to return the factorial number', () => {
    expect(factorial(3)).toBe(6)
  })
})
