import { describe, it, expect } from 'vitest'
import { Set } from '../Set'

describe('Data Structure - Set', () => {
  it('should be able to manipulate a Set', () => {
    const set = new Set()

    set.add(1)
    set.add(2)
    set.add(3)
    set.add(2)

    expect(set.size()).toBe(3)
    expect(set.has(3)).toBeTruthy()

    set.delete(2)
    expect(set.size()).toBe(2)
    expect(set.has(2)).toBeFalsy()

    set.clear()
    expect(set.size()).toBe(0)
  })

  it('should be able to return the correct union of setA and setB', () => {
    const setA = new Set()
    const setB = new Set()

    setA.add(1)
    setA.add(2)

    setB.add(1)
    setB.add(3)

    expect(setA.union(setB).values()).toStrictEqual([1, 2, 3])
  })

  it('should be able to return the correct intersection of setA and setB', () => {
    const setA = new Set()
    const setB = new Set()

    setA.add(1)
    setA.add(2)

    setB.add(1)
    setB.add(3)

    expect(setA.intersection(setB).values()).toStrictEqual([1])
  })

  it('should be able to return the correct difference of setA and setB', () => {
    const setA = new Set()
    const setB = new Set()

    setA.add(1)
    setA.add(2)

    setB.add(1)
    setB.add(3)

    expect(setA.difference(setB).values()).toStrictEqual([2])
  })

  it('should be able to return if setA is a subset of setB', () => {
    const setA = new Set()
    const setB = new Set()

    setA.add(1)
    setA.add(2)

    setB.add(1)
    setB.add(2)
    setB.add(3)

    expect(setA.isSubsetOf(setB)).toBeTruthy()
  })
})
