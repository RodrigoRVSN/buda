import { describe, it, expect } from 'vitest'
import { binarySearch } from './binarySearch'

describe('Chapter 1 - BinarySearch', () => {
  it('should be able to find the value in the array', () => {
    const numbersList = [1, 2, 3, 4, 5]
    const numberToFind = 3

    expect(binarySearch(numbersList, numberToFind)).toBe(true)
  })

  it('should be able to find the value', () => {
    const numbersList = [1, 2, 3, 4, 5, 6, 7, 30, 40, 41]
    const numberToFind = 40

    expect(binarySearch(numbersList, numberToFind)).toBe(true)
  })

  it('should not be able to find a value who not exists', () => {
    const numbersList = [1, 2, 3, 4, 5]
    const numberToFind = 10

    expect(binarySearch(numbersList, numberToFind)).toBe(false)
  })
})
