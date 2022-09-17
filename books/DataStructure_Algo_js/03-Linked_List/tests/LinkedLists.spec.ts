import { describe, it, expect } from 'vitest'
import { LinkedList } from '../LinkedList'

describe('Data Structure - LinkedList', () => {
  it('should be able to manipulate a LinkedList', () => {
    const linkedList = new LinkedList()

    linkedList.push(2)
    linkedList.push(3)
    linkedList.push(4)

    expect(linkedList.toString()).toBe('2, 3, 4')

    expect(linkedList.getElementAt(1)?.element).toBe(3)

    linkedList.removeAt(1)

    expect(linkedList.toString()).toBe('2, 4')

    linkedList.insertAt(3, 1)
    expect(linkedList.toString()).toBe('2, 3, 4')

    linkedList.remove(3)
    expect(linkedList.toString()).toBe('2, 4')

    expect(linkedList.indexOf(4)).toBe(1)
  })
})
