// Shared sollution: https://leetcode.com/problems/summary-ranges/solutions/3215315/javascript-solution-by-logic/?orderBy=most_votes

// Runtime: 66 ms
// Memory: 42.5 MB

function summaryRanges(nums: number[]): string[] {
  const ranges: string[] = []
  let sequence: number | null = null

  nums.forEach((number, index) => {
    if (sequence === null) {
      sequence = number

      if (nums[index + 1] - sequence !== 1 || index + 1 === nums.length) {
        ranges.push(`${sequence}`)
        sequence = null
      }
    }

    if (nums[index + 1] - number !== 1 && number !== sequence && sequence !== null) {
      ranges.push(`${sequence}->${number}`)
      sequence = null
    }
  })

  return ranges
};