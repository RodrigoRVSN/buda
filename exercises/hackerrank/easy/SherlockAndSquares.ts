function squares(lower: number, upper: number): number {
  const lowerValue = Math.ceil(Math.sqrt(lower))
  const higherValue = Math.floor(Math.sqrt(upper))

  return higherValue - lowerValue + 1
}