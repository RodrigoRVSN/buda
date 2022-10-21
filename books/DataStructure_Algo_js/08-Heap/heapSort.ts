import { compareFunction } from './utils/compareFunction'
import { swap } from './utils/swap'

export function heapSort (array: number[], compareFn = compareFunction) {
  let heapSize = array.length

  buildMaxHeap(array, compareFn)

  while (heapSize > 1) {
    swap(array, 0, --heapSize)
    heapify(array, 0, heapSize, compareFn)
  }

  return array
}

function buildMaxHeap (array:number[], compareFn = compareFunction) {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length, compareFn)
  }

  return array
}

export function heapify (array:number[], index: number, heapSize: number, compareFn = compareFunction) {
  let largest = index
  const left = (2 * index) + 1
  const right = (2 * index) + 2

  if (left < heapSize && compareFn(array[largest], array[left]) < 0) {
    largest = left
  }

  if (right < heapSize && compareFn(array[largest], array[right]) < 0) {
    largest = right
  }

  if (index !== largest) {
    swap(array, index, largest)
    heapify(array, largest, heapSize, compareFn)
  }
}
