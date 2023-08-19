import { describe, it, expect } from 'vitest'
import { searchSeller } from '../searchSeller'

describe('Chapter 6 - Breadth First Search', () => {
  it('should be able find a manga seller', () => {
    expect(searchSeller('you')).toBe(true)
  })
})
