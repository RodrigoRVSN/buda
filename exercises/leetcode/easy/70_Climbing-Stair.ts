// Runtime: 66 ms
// Memory: 42.5 MB

function climbStairs(n: number): number {
  if(n <= 2) return n

  let oneBefore = 2
  let twoBefore = 1
  let allWays = 0

  for (let i = 3; i <= n; i++) {
      allWays = oneBefore + twoBefore
      twoBefore = oneBefore
      oneBefore = allWays
  }

  return allWays
};