import { describe, it, expect } from 'vitest'
import { longestSubstring } from '../longestSubstring'

describe('Chapter 9 - Dynamic Programming', () => {
  it('should be able to compare substrings from blue and clues', () => {
    expect(longestSubstring('blue', 'clues')).toBe(3)
  })

  it('should be able to compare substrings from fish and bish', () => {
    expect(longestSubstring('fish', 'bish')).toBe(3)
  })

  it('should be able to compare substrings from fish and fosh', () => {
    expect(longestSubstring('fish', 'fosh')).toBe(3)
  })
})
