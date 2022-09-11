import { describe, it, expect } from 'vitest'
import { Deque } from '../Deque'

describe('Data Structure - Deque', () => {
  it('should be able to manage the Deque using objects', () => {
    const deque = new Deque()

    deque.enqueueFront(2)
    deque.enqueueTail(3)
    deque.enqueueFront(1)

    expect(deque.peekFront()).toBe(1)
    expect(deque.peekTail()).toBe(3)
    expect(deque.isEmpty()).toBeFalsy()

    expect(deque.getSize()).toBe(3)

    deque.dequeueFront()
    deque.dequeueTail()

    expect(deque.peekFront()).toBe(2)

    expect(deque.getSize()).toBe(1)
  })
})
