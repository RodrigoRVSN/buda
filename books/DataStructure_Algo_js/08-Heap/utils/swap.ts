export function swap (array: number[], a: number, b: number) {
  const temp = array[a]
  array[a] = array[b]
  array[b] = temp
}
