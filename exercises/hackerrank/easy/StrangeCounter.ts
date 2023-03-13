function strangeCounter(t: number): number {
  let counter = 1
  let maxValue = 3

  while (counter + maxValue - 1 < t) {
    counter = counter * 2 + 2
    maxValue *= 2
  }

  return maxValue - (t - counter)

}