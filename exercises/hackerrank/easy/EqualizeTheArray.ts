function equalizeArray(array: number[]): number {
  const values = new Map()
  let maxValue = 0

  array.forEach(number => {
    if (values.get(number)) {
      values.set(number, values.get(number) + 1)
    }

    else {
      values.set(number, 1)
    }

    if (values.get(number) > maxValue) {
      maxValue = values.get(number)
    }
  })

  return array.length - maxValue
}