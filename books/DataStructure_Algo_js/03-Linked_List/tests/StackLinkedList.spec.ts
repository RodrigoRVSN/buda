import { describe, it, expect } from 'vitest'
import { StackLinkedList } from '../StackLinkedList'

describe('Data Structure - StackLinkedList', () => {
  it('should be able to manage the StackLinkedList using objects', () => {
    const stack = new StackLinkedList()

    stack.push(2)

    expect(stack.peek()).toBe(2)
    expect(stack.isEmpty()).toBeFalsy()

    stack.push(3)

    expect(stack.peek()).toBe(3)
    expect(stack.getSize()).toBe(2)

    stack.pop()

    expect(stack.isEmpty()).toBeFalsy()

    stack.pop()

    expect(stack.peek()).toBeUndefined()
    expect(stack.isEmpty()).toBeTruthy()
  })
})
