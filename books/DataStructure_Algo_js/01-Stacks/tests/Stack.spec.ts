import { describe, it, expect } from 'vitest'
import { Stack } from '../StackObject'

describe('Data Structure - Stack', () => {
  it('should be able to manage the Stack using objects', () => {
    const stack = new Stack()

    stack.push(2)

    expect(stack.peek()).toBe(2)
    expect(stack.isEmpty()).toBeFalsy()

    stack.push(3)

    expect(stack.peek()).toBe(3)
    expect(stack.getSize()).toBe(2)

    stack.pop()

    expect(stack.isEmpty()).toBeFalsy()

    stack.pop()

    expect(stack.peek()).toBe('404')
    expect(stack.isEmpty()).toBeTruthy()
  })
})
