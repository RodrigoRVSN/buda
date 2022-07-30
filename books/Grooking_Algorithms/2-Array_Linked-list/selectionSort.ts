import { getLowerIndex } from './getLowerIndex'

export const selectionSort = (array: number[]) => {
  const orderedArray = [] as number[]
  const length = array.length

  for (let i = 0; i < length; i++) {
    const lowestIndex = getLowerIndex(array)

    const value = array.splice(lowestIndex, 1)[0]

    orderedArray.push(value)
  }

  return orderedArray
}
