export function longestConsec(strarr: string[], k: number): string {
  const size = strarr.length
  let longestConcat = ''

  for (let i = 0; i <= size - k && k > 0 && k <= size; i++) {
    const concatenatedStrings = strarr.slice(i, i + k).join('')

    if (longestConcat.length < concatenatedStrings.length) {
      longestConcat = concatenatedStrings
    }
  }

  return longestConcat
}