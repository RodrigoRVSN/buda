function serviceLane(n: number, cases: number[][], width: number[]): number[] {
  const lane: number[] = []

  for (let i = 0; i < cases.length; i++) {
    const subarray = width.slice(cases[i][0], cases[i][1] + 1)
    const minimumValue = Math.min(...subarray)
    lane.push(minimumValue)
  }

  return lane
}
