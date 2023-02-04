// Runtime 87 ms
// Memory 45.3 MB

function removeDuplicates(nums: number[]): number {
  let pointerIndex = 1

  for(let i = 1; i < nums.length; i++) {
      if(nums[i - 1] !== nums[i]) {
          nums[pointerIndex] = nums[i]
          pointerIndex++
      }
  }

  return pointerIndex
};