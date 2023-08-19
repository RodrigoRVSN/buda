export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

export const compareFunction = (a: number, b: number) => {
  console.log(a, b)
  if (a === b) return 0

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

export const reverseCompare = (compareFn: typeof compareFunction) => {
  return (a: number, b: number) => compareFn(b, a)
}
