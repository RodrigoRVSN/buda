import { MinHeap } from './MinHeap'
import { compareFunction, reverseCompare } from './utils/compareFunction'

export class MaxHeap extends MinHeap {
  constructor (compareFn = compareFunction) {
    super(compareFn)
    this.compareFn = reverseCompare(compareFn)
  }
}
