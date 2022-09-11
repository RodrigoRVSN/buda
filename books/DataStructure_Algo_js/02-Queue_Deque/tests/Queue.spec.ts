import { describe, it, expect } from 'vitest'
import { Queue } from '../Queue'

describe('Data Structure - Queue', () => {
  it('should be able to manage the Queue using objects', () => {
    const queue = new Queue()

    queue.enqueue(2)

    expect(queue.peek()).toBe(2)
    expect(queue.isEmpty()).toBeFalsy()

    queue.enqueue(3)

    expect(queue.peek()).toBe(2)
    expect(queue.getSize()).toBe(2)

    queue.dequeue()

    expect(queue.isEmpty()).toBeFalsy()

    queue.dequeue()

    expect(queue.isEmpty()).toBeTruthy()
  })
})
