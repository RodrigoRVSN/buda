// Runtime: 92 ms
// Memory: 48.5 MB

function singleNumber(nums: number[]): number {
  const values: { [key: number]: number } = {}

  nums.forEach(number => {
    if (!values[number]) {
      values[number] = 0
    }

    values[number]++
  })

  for (let element in values) {
    if (values[element] === 1) {
      return Number(element)
    }
  }

  return nums[0]
};

// Runtime: 61 ms
// Memory: 45.6 MB

function singleNumber2(nums: number[]): number {
  let value = 0

  nums.forEach(item => {
    value ^= item
  })

  return value
};