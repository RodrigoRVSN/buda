// ? Converting the number to a string and comparing with the reverse

// Runtime: 186 ms
// Memory: 51.4 mb

// ! Convert to string require extra non-constant memory space 

var isPalindrome = function(x) {
  const textNumber = String(x)
  const splittedNumber = textNumber.split('')
  const reversedNumber = splittedNumber.reverse().join('')

  return textNumber === reversedNumber
};

/*____________________________________________________________________*/

// ? Cut the number in middle and compare the left middle with the right middle of the number

// Runtime: 187 ms
// Memory: 49.8 MB

var isPalindrome = function(x) {
  if(x < 0 || x % 10 === 0 & x != 0) return false

  let revertedNumber = 0

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = Math.floor(x / 10)
  }

  return x === revertedNumber || x === Math.floor(revertedNumber / 10)
};