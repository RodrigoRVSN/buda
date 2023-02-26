function beautifulTriplets(difference: number, array: number[]): number {
  // Write your code here
  let tripletsCount = 0

  for (let i = 0; i < array.length; i++) {
    const sequenceFirst = array[i] + difference
    const sequenceSecond = sequenceFirst + difference

    const firstFind = array.find(number => number === sequenceFirst)
    const secondFind = array.find(number => number === sequenceSecond)

    if (firstFind && secondFind) {
      tripletsCount++
    }
  }

  return tripletsCount
}