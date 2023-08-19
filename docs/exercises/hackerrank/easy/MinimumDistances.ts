function minimumDistances(array: number[]): number {
  let minimumDistance = -1

  for (let i = 0; i < array.length; i++) {
    const locale = array.findIndex((number, index) => number === array[i] && index > i)

    const isFound = locale > -1
    const isLower = locale - i < minimumDistance
    const isFirst = minimumDistance === -1

    if (isFound && (isLower || isFirst)) {
      minimumDistance = locale - i
    }
  }

  return minimumDistance
}