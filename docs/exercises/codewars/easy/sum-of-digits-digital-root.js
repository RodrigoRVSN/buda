const digitalRoot = (number) =>  {
  if (number < 10) return number

  const sumOfValues = String(number).split('').reduce((accumulator, digit) => Number(accumulator) + Number(digit), 0)
  return digitalRoot(sumOfValues)
}