/* // ? Using Hash Map -> Store in Map the count of each element and check if have a truthy condition `count > n / 2` */

// Runtime: 82 ms
// Memory: 45.8 MB

function majorityElement(nums: number[]): number {
  const numbers = new Map()

  for (let i = 0; i < nums.length; i++) {
    numbers.set(nums[i], (numbers.get(nums[i]) || 0) + 1)

    if (numbers.get(nums[i]) > nums.length / 2) {
      return nums[i]
    }
  }

  return 0
};

/* // ? Using Boyer-Moore Voting Algorithm -> We increase the majoritary element count and save in candidate var, if heve another possible candidate the count will be 0 and will be replaced by the new candidate */

// Runtime: 71 ms
// Memory: 44.7 MB

function majorityElement2(nums: number[]): number {
  let count = 0
  let candidate: number = nums[0]

  nums.forEach(number => {
    if (count === 0) {
      candidate = number
    }

    count += candidate === number ? 1 : -1
  })

  return candidate
};