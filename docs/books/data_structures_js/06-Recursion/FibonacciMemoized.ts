export const FibonacciMemoized = (n: number) => {
  const memo = [0, 1]

  const fibonacci = (n: number): number => {
    if (memo[n]) return memo[n]
    if (n <= 0) return 0
    if (n <= 2) return 1

    const recursiveValue = fibonacci(n - 1) + fibonacci(n - 2)
    memo[n] = recursiveValue

    return recursiveValue
  }

  return fibonacci(n)
}
