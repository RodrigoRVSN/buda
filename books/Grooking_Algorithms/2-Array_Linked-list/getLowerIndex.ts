export const getLowerIndex = (array: number[]) => {
  let lowestIndex = 0

  array.forEach((number, index) => {
    if (number < array[lowestIndex]) {
      lowestIndex = index
    }
  })

  return lowestIndex
}
