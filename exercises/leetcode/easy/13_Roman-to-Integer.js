// Runtime: 491 ms
// Memory: 53 mb

const letters = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

var romanToInt = function(s) {
  const splittedLetters = s.split('')
  let number = 0

  splittedLetters.forEach((letter, index) => {
      console.log({letter})
      if((letter === 'V' || letter === 'X') && splittedLetters[index - 1] === 'I') number -= 1 * 2
      if((letter === 'L' || letter === 'C') && splittedLetters[index - 1] === 'X') number -= 10 * 2
      if((letter === 'M' || letter === 'D') && splittedLetters[index - 1] === 'C') number -= 100 * 2

      number += letters[letter]

      console.log({number})
  })

  return number
};


/*_________________________________________________________*/

// ? Solution using Hash Table

// Runtime: 130 ms
// Memory: 45.8 mb

const lettersMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

var romanToInt = function(s) {
  let number = 0

  for (let i = 0; i < s.length; i++) {
      const current = lettersMap[s[i]]
      const next = lettersMap[s[i + 1]]

      if (current < next) {
          number += next - current
          i++
      } else {
          number += current
      }
  }

  return number
};