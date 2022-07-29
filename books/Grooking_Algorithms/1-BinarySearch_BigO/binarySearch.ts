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

console.log(binarySearch([1, 2, 3, 4, 5], 2))

// Suppose you have a sorted list of 128 names, and you're search through it using binary search, whats the maximum number of steps it would take?

// Suppose you doble the size of the list whats the maximum
