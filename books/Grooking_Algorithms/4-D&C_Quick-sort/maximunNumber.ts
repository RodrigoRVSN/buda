export function maximunNumber (array: number[]): number {
  if (array.length <= 1) return array[0]

  const maxSliced = maximunNumber(array.slice(1))
  const maxNumber = array[0] > maxSliced ? array[0] : maxSliced

  return maxNumber
}
