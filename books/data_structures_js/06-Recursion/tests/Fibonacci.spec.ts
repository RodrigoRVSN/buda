import { describe, it, expect } from 'vitest'
import { FibonacciRecursive } from '../FibonacciRecursive'
import { Fibonacci } from '../Fibonacci'
import { FibonacciMemoized } from '../FibonacciMemoized'

describe('Data Structure - Recursion', () => {
  it('should be able to manipulate a Fibonacci', () => {
    expect(Fibonacci(6)).toBe(8)
    expect(Fibonacci(25)).toBe(75025)
  })

  it('should be able to manipulate a Fibonacci Recursive', () => {
    expect(FibonacciRecursive(6)).toBe(8)
    expect(FibonacciRecursive(25)).toBe(75025)
  })

  it('should be able to manipulate a Fibonacci Recursive Memoized', () => {
    expect(FibonacciMemoized(6)).toBe(8)
    expect(FibonacciMemoized(25)).toBe(75025)
  })
})
