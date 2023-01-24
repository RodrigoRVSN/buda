// Runtime: 90 ms
// Memory: 42.1 MB

const bracketsMap = {
  ')': '(',
  ']': '[',
  '}': '{'
}

const closeBrackets = [')', '}', ']']

var isValid = function(s) {
  if(s.length <= 1) return false

  const splittedBrackets = s.split('')
  const openBrackets = []

  for (let i = 0; i <= s.length - 1; i++) {
      if (closeBrackets.includes(splittedBrackets[i])) {
          if(bracketsMap[splittedBrackets[i]] === openBrackets[openBrackets.length - 1]) {
              openBrackets.pop()
          } else {
              return false
          }
      } else {
          openBrackets.push(splittedBrackets[i])
      }
  }

  return !openBrackets.length
};