/* Suppose you have a sorted list of 128 names, and you're search through it using binary search, whats the maximum number of steps it would take? */

// R: 7

/* Suppose you doble the size of the list whats the maximum */

// R: 8

export const getMaximumSteps = (listLength: number) => {
  return Math.log2(listLength)
}
