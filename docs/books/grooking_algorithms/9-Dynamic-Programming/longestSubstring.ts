// Draw and fill in the grid to calculate the longest common substring between blue and clues.

export const longestSubstring = (firstWord: string, secondWord: string) => {
  const splittedFirst = [...firstWord]
  const splittedSecond = [...secondWord]
  let count = 0

  splittedFirst.forEach(letterFirst => {
    splittedSecond.forEach(letterSecond => {
      if (letterFirst === letterSecond) count++
    })
  })

  return count
}
