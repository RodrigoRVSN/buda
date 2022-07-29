import { describe, it, expect } from 'vitest'
import { getMaximumSteps } from '../getMaximumSteps'

describe('Chapter 1 - BinarySearch -> Maximum Steps', () => {
  it('should return 3 if has 8 elements in array', () => {
    expect(getMaximumSteps(8)).toBe(3)
  })

  it('should return 7 if has 128 elements in array', () => {
    expect(getMaximumSteps(128)).toBe(7)
  })

  it('should return 8 when we doble the array length', () => {
    expect(getMaximumSteps(256)).toBe(8)
  })
})
