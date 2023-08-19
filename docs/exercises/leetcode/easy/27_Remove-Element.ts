// Runtime: 61 ms
// Memory: 43.3 MB

function removeElement(nums: number[], val: number): number {
  let pointerIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointerIndex] = nums[i]
      pointerIndex++
    }
  }

  return pointerIndex
};