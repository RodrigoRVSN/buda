export const factorial = (number: number): number => {
  if (number === 1) return 1

  return number * factorial(number - 1)
}
