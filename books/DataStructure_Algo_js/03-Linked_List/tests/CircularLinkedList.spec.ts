import { describe, it, expect } from 'vitest'
import { CircularLinkedList } from '../CircularLinkedList'

describe('Data Structure - CircularLinkedList', () => {
  it('should be able to manipulate a CircularLinkedList', () => {
    const circularLinkedList = new CircularLinkedList()

    circularLinkedList.insert(2, 0)

    circularLinkedList.insert(3, 0)

    circularLinkedList.insert(4, 1)

    expect(circularLinkedList.getSize()).toBe(3)

    circularLinkedList.removeAt(1)

    circularLinkedList.removeAt(0)

    expect(circularLinkedList.getSize()).toBe(1)
  })
})
