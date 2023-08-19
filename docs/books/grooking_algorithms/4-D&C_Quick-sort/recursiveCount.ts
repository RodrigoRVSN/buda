export const recursiveCount = (array: number[]): number => {
  if (array.length === 1) return 1

  return 1 + recursiveCount(array.slice(1))
}
