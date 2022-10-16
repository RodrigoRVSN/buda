export const FibonacciRecursive = (number: number): number => {
  if (number <= 0) return 0
  if (number <= 2) return 1

  return FibonacciRecursive(number - 1) + FibonacciRecursive(number - 2)
}
