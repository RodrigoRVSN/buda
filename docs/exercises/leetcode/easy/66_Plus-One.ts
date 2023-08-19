// Runtime: 72 ms
// Memory Usage: 43.6 MB

function plusOne(digits: number[]): number[] {
  if(digits[digits.length - 1] < 9) {
      digits[digits.length - 1] = digits[digits.length - 1] + 1 
      return digits
  }

  for (let i = digits.length - 1; i >= 0; i--) {
      digits[i]++
      
      if (digits[i] <= 9) {
          return digits
      }

      digits[i] = 0
  }

  digits.unshift(1)

  return digits
};