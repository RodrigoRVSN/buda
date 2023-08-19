// Runtime: 116 ms
// Memory: 62.6 MB

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) return true

    map.set(nums[i], i)
  }

  return false
};