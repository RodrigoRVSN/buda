import { describe, it, expect } from 'vitest'
import { Stack } from '../StackObject'

describe('Chapter 2 - Selection Sort', () => {
  it('should be able to return a ordered list', () => {
    const stack = new Stack()

    stack.push(2)
    expect(stack.peek()).toBe(2)

    stack.push(3)
    expect(stack.peek()).toBe(3)

    stack.pop()

    expect(stack.isEmpty()).toBeFalsy()

    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()

    expect(stack.peek()).toBe('404')
  })
})
