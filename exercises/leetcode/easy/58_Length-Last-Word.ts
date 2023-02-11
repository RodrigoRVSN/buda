// Runtime 66 ms
// Memory 43.3 MB

function lengthOfLastWord(s: string): number {
  const wordsWithoutSpaces = s.trim()
  const words = wordsWithoutSpaces.split(' ')

  return words[words.length - 1].length
};