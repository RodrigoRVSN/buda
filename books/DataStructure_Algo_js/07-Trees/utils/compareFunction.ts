export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

export const compareFunction = (a: number, b: number) => {
  if (a === b) return 0

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
