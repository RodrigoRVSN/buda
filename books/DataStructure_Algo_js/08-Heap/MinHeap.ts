import { Compare, compareFunction } from './utils/compareFunction'
import { swap } from './utils/swap'

export class MinHeap {
  heap: number[]
  compareFn: typeof compareFunction

  constructor (compareFn = compareFunction) {
    this.compareFn = compareFn
    this.heap = []
  }

  getLeftIndex (index: number) {
    return 2 * index + 1
  }

  getRightIndex (index: number) {
    return 2 * index + 2
  }

  getParentIndex (index: number) {
    if (index === 0) return undefined

    return Math.floor((index - 1) / 2)
  }

  insert (value: number) {
    if (!value) return false

    this.heap.push(value)
    this.siftUp(this.heap.length - 1)
    return true
  }

  siftUp (index: number) {
    let parent = this.getParentIndex(index)!

    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > Compare.BIGGER_THAN) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)!
    }
  }

  size () {
    return this.heap.length
  }

  isEmpty () {
    return this.size() === 0
  }

  findMinimum () {
    return this.heap[0]
  }

  extract () {
    if (this.isEmpty()) return undefined

    if (this.size() === 1) return this.heap.shift()

    const removedValue = this.heap.shift()
    this.siftDown(0)
    return removedValue
  }

  siftDown (index: number) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getLeftIndex(index)
    const size = this.size()

    if (left < size && this.compareFn(this.heap[element], this.heap[left]) > Compare.BIGGER_THAN) {
      element = left
    }

    if (right < size && this.compareFn(this.heap[element], this.heap[right]) > Compare.BIGGER_THAN) {
      element = right
    }

    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}
