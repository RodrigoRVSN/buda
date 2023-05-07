export const Fibonacci = (number: number) => {
  if (number < 1) return 0
  if (number <= 2) return 1

  let fibNum2 = 0
  let fibNum1 = 1
  let fibTotal = number

  for (let i = 2; i <= number; i++) {
    fibTotal = fibNum1 + fibNum2
    fibNum2 = fibNum1
    fibNum1 = fibTotal
  }

  return fibTotal
}
