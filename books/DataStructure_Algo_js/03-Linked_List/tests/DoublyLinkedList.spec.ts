import { describe, it, expect } from 'vitest'
import { DoublyLinkedList } from '../DoublyLinkedList'

describe('Data Structure - DoublyLinkedList', () => {
  it('should be able to manipulate a DoublyLinkedList', () => {
    const doublyLinkedList = new DoublyLinkedList()

    doublyLinkedList.insert(2, 0)
    expect(doublyLinkedList.toString()).toBe('2')

    doublyLinkedList.insert(3, 0)
    expect(doublyLinkedList.toString()).toBe('3, 2')

    doublyLinkedList.insert(4, 1)
    expect(doublyLinkedList.toString()).toBe('3, 4, 2')

    doublyLinkedList.removeAt(1)
    expect(doublyLinkedList.toString()).toBe('3, 4')

    doublyLinkedList.removeAt(0)
    expect(doublyLinkedList.toString()).toBe('4')
  })
})
