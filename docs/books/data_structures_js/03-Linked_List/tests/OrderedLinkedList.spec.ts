import { describe, it, expect } from 'vitest'
import { OrderedLinkedList } from '../OrderedLinkedList'

describe('Data Structure - OrderedLinkedList', () => {
  it('should be able to manipulate a OrderedLinkedList', () => {
    const orderedLinkedList = new OrderedLinkedList()

    orderedLinkedList.insert(2)

    orderedLinkedList.insert(5)

    orderedLinkedList.insert(6)

    orderedLinkedList.insert(1)

    expect(orderedLinkedList.toString()).toBe('1, 2, 5, 6')
    expect(orderedLinkedList.getSize()).toBe(4)
  })
})
