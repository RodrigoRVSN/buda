// Runtime: 76 ms
// Memory: 44.5 MB

function mySqrt(x: number): number {
  let approx = x / 2
  let prevApprox = 0

  while(approx !== prevApprox) {
      prevApprox = approx
      approx = (approx + x / approx) / 2
  }

  return Math.floor(approx)
};