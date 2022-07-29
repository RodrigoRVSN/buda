export const binarySearch = (numbers: number[], number: number) => {
  let left = 0
  let right = numbers.length - 1
  let middle = numbers.length / 2

  while (left <= right) {
    middle = Math.floor((left + right) / 2)
    const middleNumber = numbers[middle]

    if (middleNumber === number) return true

    if (number > middleNumber) {
      left = middle + 1
    }
    if (number < middleNumber) {
      right = middle - 1
    }
  }

  return false
}
