export const quickSort = (array: number[]): number[] => {
  if (array.length < 2) return array

  const pivot = array[0]

  const less = array.slice(1).filter(number => number < pivot)
  const higher = array.slice(1).filter(number => number >= pivot)

  const orderedList = quickSort(less).concat(pivot, quickSort(higher))

  return orderedList
}
