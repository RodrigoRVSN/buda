export const binarySearch = (numbers: number[], number: number) => {
  let left = 0
  let right = numbers.length - 1
  let middle = numbers.length / 2

  while (left <= right) {
    middle = Math.floor((left + right) / 2) // O (log(n))
    const middleNumber = numbers[middle]

    if (middleNumber === number) return true // O (1)

    if (number > middleNumber) { // O (1)
      left = middle + 1
    }
    if (number < middleNumber) { // O (1)
      right = middle - 1
    }
  }

  return false
}
