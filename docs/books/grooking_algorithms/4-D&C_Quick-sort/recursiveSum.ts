export const recursiveSum = (array: number[]): number => {
  if (array.length === 0) return 0

  return array[0] + recursiveSum(array.slice(1))
}
